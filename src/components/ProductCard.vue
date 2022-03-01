<template>
  <div class="product-card">
    <div class="product-img">
      <img :src="`${product.PhotoName}?w=300&h=300`" alt="product image" />
    </div>
    <div class="product-info">
      <p class="product-name">{{ product.ItemName }}</p>
      <p>Item ID #{{ product.ItemID }}</p>
      <p>${{ product.BasePrice }}</p>
      <router-link :to="`/productDetails/${product.id}`"> Product Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 45px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: 1px solid black;
  border-radius: 5px;
  padding: 50px;
}
img {
  position: relative;
  text-align: center;
  color: white;
  background-position: center;
}
.product-info {
  display: flex;
  flex-direction: column;
}
.secondary-info {
  display: flex;
  justify-content: space-between;
}
.product-price {
  font-size: 25px;
  font-weight: bold;
  color: rgb(199, 53, 0);
  margin-left: 20px;
}
.product-name {
  font-size: 20px;
  font-weight: bold;
}
.id {
  margin: 5px 10px;
  font-weight: lighter;
}
@media screen and (min-width: 1026px) {
  .product-card {
    padding: 65px;
  }
}
@media screen and (max-width: 500px) {
  .product-card {
    padding: 20px;
  }
}
</style>
