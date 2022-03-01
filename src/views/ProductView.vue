<template>
  <ProductDetails :product="product" />
</template>

<script>
import ProductDetails from "../components/ProductDetails";
export default {
  name: "ProductView",
  components: {
    ProductDetails,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async fetchItems() {
      const response = await fetch(`http://localhost:5000/items/${this.$route.params.id}`);
      return response.json();
    },
  },
  async created() {
    this.product = await this.fetchItems();
  },
};
</script>