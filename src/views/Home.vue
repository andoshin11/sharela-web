<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to my Firebase App"/>
    <h2>{{ user ? user.displayName : '' }}</h2>
    <img src="../assets/login_line.png" class="login" @click="login">
    <button @click="logout">logout</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from 'vuex'
import * as firebase from "firebase"

import HelloWorld from "@/components/HelloWorld.vue"

const provider = new firebase.auth.GoogleAuthProvider()

export default Vue.extend({
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    login (): void {
      console.log('logging in')
      firebase.auth().signInWithRedirect(provider)
    },
    logout (): void {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('sign out successful')
      }).catch(function(error) {
        // An error happened.
        console.log('sign out failed')
      });
    }
  },
  mounted () {
    console.log('vuex test')
    console.log(this.$store)
  }
});
</script>

<style scoped>
  .login {
    width: 142px;
    height: 40px;
  }
</style>

