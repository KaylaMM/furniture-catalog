<template>
  <div class="product-view">
    <div class="product-img">
      <img :src="`${product.PhotoName}?w=500&h=500`" alt="product image" />
      <div class="product-info">
        <p class="product-name">{{ product.ItemName }}</p>
        <div class="secondary-info">
          <p class="product-price">{{ productPrice }}</p>
          <p class="product-dims">{{ productDims }}</p>
          <p class="product-description">{{ product.Description }}</p>
          <div class="ids">
            <span class="id">mfg id: {{ product.ManufacturerID }}</span>
            <span class="id">product# {{ product.id }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    product: Object,
  },
  computed: {
    productPrice() {
      return `$${parseFloat(this.product.BasePrice).toFixed(2)}`;
    },
    productDims() {
      return this.product.Dimensions?.toLowerCase();
    },
  },
};
</script>

<style scoped>
.product-view {
  margin: 100px;
  display: flex;
  flex-wrap: wrap;
}
.product-img {
  position: relative;
  text-align: center;
  color: black;
  background-position: center;
}
.product-info {
  margin-left: 80px;
  margin-bottom: 50px;
}
.product-name {
  font-size: 30px;
  margin-top: 0;
  text-align: left;
}
.secondary-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.product-price {
  font-size: 28px;
  font-weight: bold;
  color: rgb(199, 53, 0);
}
.product-dims {
  font-size: 20px;
}
.product-description {
  max-width: 400px;
  text-align: left;
  font-size: 18px;
  margin: 20px 0px 20px 0px;
  font-style: italic;
  color: rgb(100, 100, 100);
}
.ids {
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
}
.id {
  margin-right: 20px;
  font-weight: lighter;
}
@media screen and (max-width: 1026px) {
  .product-info {
    margin-left: 40px;
    margin-top: 40px;
  }
}
@media screen and (max-width: 426px) {
  .product-view {
    margin: 50px;
  }
  img {
    width: 240px;
  }
  .stock-alert {
    font-size: 16px;
  }
  .product-info {
    margin-left: 0;
    margin-bottom: 50px;
  }
  .product-name {
    font-size: 20px;
  }
  .product-price {
    font-size: 18px;
  }
  .product-description {
    text-align: left;
    font-size: 16px;
  }
  .product-stock {
    font-size: 18px;
  }
  .id {
    margin-top: 5px;
  }
  @media screen and (max-width: 375px) {
    img {
      width: 200px;
    }
  }
}
</style>
