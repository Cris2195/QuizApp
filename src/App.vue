<template>
  <div id="app">
    <vue-particles color="#dedede"></vue-particles>
    <Menu />
  </div>
</template>
<script>
import Menu from "./components/Menu.vue";
export default {
  components: {
    Menu
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#particles-js {
  height: 100vh;
}
.centered-text {
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 20%;
  width: 100%;
}
</style>
