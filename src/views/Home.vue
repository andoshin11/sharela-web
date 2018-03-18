<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to my Firebase App"/>
    <h2>{{ user ? user.displayName : '' }}</h2>
    <sign-in/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from 'vuex'
import * as firebase from "firebase"

// components
import HelloWorld from "@/components/HelloWorld.vue"
import SignIn from '@/components/SignIn.vue'

const provider = new firebase.auth.GoogleAuthProvider()

export default Vue.extend({
  name: "home",
  components: {
    HelloWorld,
    SignIn
  },
  computed: {
    ...mapState('user', ['user'])
  }
});
</script>
