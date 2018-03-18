<template>
  <el-container id="app">
    <el-header>
      <the-header/>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import * as firebase from "firebase"

// vuex
import { SIGN_IN, SIGN_OUT } from '@/store/modules/user/actionTypes'

// types
import { User, RawUser } from '@/types/User'
import { error } from 'util'

// components
import TheHeader from '@/components/The/Header.vue'

export default Vue.extend({
  components: {
    TheHeader
  },
  methods: {
    ...mapActions('user', [SIGN_IN, SIGN_OUT]),
    async isNewUser (user: RawUser): Promise<boolean> {
      try {
        const snapshot = await firebase.database().ref(`/users/${user.uid}`).once('value')
        const val = snapshot.val()
        return val ? false : true
      } catch (e) {
        console.log('error')
        console.log(e)
        return true
      }
    },
    async createUser (user: RawUser): Promise<void> {
      try {
        const newUser: User = {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
          verified: false
        }
        const result = await firebase.database().ref(`/users/${user.uid}`).set(newUser)
      } catch (e) {
      }
    }
  },
  async mounted (): Promise<void> {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        this['SIGN_IN'](user)

        // check user existence
        const isNewUser = await this.isNewUser(user)

        if (isNewUser) this.createUser(user)
      } else {
        this.SIGN_OUT()
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
