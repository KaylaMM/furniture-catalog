<template>
  <div class="rep-bar">
    <div class="container">
      <div class="contact">
        <div class="rep-info">
          <h6>Your Rep</h6>
          <span>{{ salesRep.FirstName }} {{ salesRep.LastName }}</span>
          <span>{{ salesRep.EmailAddress }}</span>
          <span>{{ salesRep.Phone }}</span>
        </div>
        <div class="address-info">
          <h6>Location</h6>
          <span>{{ salesRep.CompanyName }}</span>
          <span>{{ salesRep.City }}, {{ salesRep.State }}</span>
          <span>{{ salesRep.PostalCode }}</span>
        </div>
      </div>
      <div class="message-info">
        <h6>Rep note:</h6>
        <p class="message">{{ companyInfo.Message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepBar",
  props: {
    salesRep: Object,
    companyInfo: Object,
  },
};
</script>

<style scoped>
.rep-bar {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(206, 206, 206, 0.89);
  margin: 0 30px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
}
.contact {
  display: flex;
}
.rep-info,
.address-info {
  display: flex;
  padding-left: 50px;
  width: 150px;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid black;
}
.message-info {
  display: flex;
  flex-direction: column;
  max-width: 380px;
  text-align: left;
  padding-left: 40px;
}
.message {
  margin-bottom: 170px;
  margin-top: auto;
}
@media screen and (max-width: 768px) {
  .container {
    justify-content: center;
  }
  .address-info {
    border-right: none;
  }
}
@media screen and (max-width: 425px) {
  .rep-bar {
    max-width: 400px;
    overflow: hidden;
    margin: 0;
  }
  .container {
    flex-direction: column;
    justify-content: flex-start;
    font-size: 14px;
  }
  .contact {
    flex-direction: column;
  }
  .message-info {
    max-width: 280px;
    margin-right: auto;
  }
  .rep-info {
    max-width: 140px;
    border-right: none;
  }
  .address-info {
    margin-left: 0;
    border-right: none;
  }
  .rep-info,
  .address-info,
  .message-info {
    padding-left: 15px;
  }
}
</style>
