<template>
  <nav-bar-com></nav-bar-com>

  <router-view />
  <footer-com></footer-com>
</template>

<script>
import FooterCom from "./components/FooterCom.vue";
import NavBarCom from "./components/NavBarCom.vue";

export default {
  setup() {},
  components: {
    NavBarCom,
    FooterCom,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
