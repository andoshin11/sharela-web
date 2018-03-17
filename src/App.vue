<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import * as firebase from "firebase"

// vuex
import { SIGN_IN, SIGN_OUT } from '@/store/modules/user/actionTypes'

export default Vue.extend({
  methods: {
    ...mapActions('user', [SIGN_IN, SIGN_OUT])
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this[SIGN_IN](user)
      } else {
        this[SIGN_OUT]()
      }
    })
  }
})
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
