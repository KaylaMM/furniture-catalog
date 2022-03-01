<template>
  <header>
    <div class="branding">
      <router-link class="back-link" to="/">
      <router-link class="back-link" to="/">
        <img
          className="repzio-logo-img"
          src="https://images.repzio.com/productimages/772/logo772_lg.jpg?w=180"
          alt="repzio-logo"
        />
      </router-link>
      </router-link>
    </div>
    <div class="links">
      <a class="nav-link home" href="/">Home</a>
      <a class="nav-link" href="/">Logout</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 20px 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: 5px;
}
.links {
  display: flex;
}
.nav-link {
  text-decoration: none;
  padding: 0 10px 0 10px;
}
.my-acct {
  border-right: 1px solid black;
}
@media screen and (max-width: 600px) {
  img {
    width: 80px;
  }
  header {
    padding: 10px 10px 20px 30px;
  }
}
</style>
