<template>
  <div class="container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 100%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 5px;
}

</style>
