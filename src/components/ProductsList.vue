<template>
  <div class="product-list">
    <div :key="product.id" v-for:="product in products">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
  name: "ProductsList",
  props: {
    products: Array,
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-evenly;
}
@media screen and (max-width: 425px) {
  .products-list {
    overflow: hidden;
    max-width: 400px;
  }
}
</style>
