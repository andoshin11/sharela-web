<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to my Firebase App"/>
    <img src="../assets/login_line.png" class="login">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "home",
  components: {
    HelloWorld
  }
});
</script>

<style scoped>
  .login {
    width: 142px;
    height: 40px;
  }
</style>

