<template>
  <img src="../assets/login_google.png" class="sign-in" @click="login" v-if="!user">
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from 'vuex'
import * as firebase from "firebase"

const provider = new firebase.auth.GoogleAuthProvider()

export default Vue.extend({
  name: "SignIn",
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    login (): void {
      firebase.auth().signInWithRedirect(provider)
    }
  }
});
</script>

<style scoped>
  .sign-in {
    width: 191px;
    height: 46px;
    cursor: pointer;
    transition: .3s;
  }

  .sign-in:hover {
    opacity: .6;
  }
</style>