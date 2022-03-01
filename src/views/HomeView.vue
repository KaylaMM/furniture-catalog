<template>
  <div>
    <RepCard :salesRep="salesRep" :companyInfo="companyInfo" />
    <ProductsList :products="products" />
  </div>
</template>

<script>
import RepCard from "../components/RepCard";
import ProductsList from "../components/ProductsList";

export default {
  name: "HomeView",
  props: {
    showAddTask: Boolean,
  },
  components: {
    ProductsList,
    RepCard,
  },
  data() {
    return {
      products: [],
      salesRep: {},
      companyInfo: {},
    };
  },
  methods: {
    async fetchProducts() {
      const res = await fetch("api/items");
      const data = await res.json();
      return data;
    },
    async fetchRepInfo() {
      const res = await fetch("api/SalesRep");
      const data = await res.json();
      return data || {};
    },
    async fetchCompanyInfo() {
      const res= await fetch("api/companyInfo");
      const data = await res.json();
      return data || [];
    },
  },
  async created() {
    this.products = await this.fetchProducts();
    this.salesRep = await this.fetchRepInfo();
    this.companyInfo = await this.fetchCompanyInfo();
  },
};
</script>
