<template>
  <el-row class="header" v-loading.fullscreen.lock="loading">
    <el-col :span="12" :offset="6">
      <div class="header__title">シェアラWeb</div>
    </el-col>
    <el-col :span="6">
      <el-menu menu-trigger="click" mode="horizontal">
        <el-menu-item index="1">メンバー</el-menu-item>
        <el-submenu index="2">
          <template slot="title">メニュー</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3" @click="signOut" v-if="user">ログアウト</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import * as firebase from "firebase"

export default Vue.extend({
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    async signOut (): Promise<void> {
      try {
        this.loading = true
        const response = await firebase.auth().signOut()
        this.loading = false
      } catch (e) {
        console.log(e)
        this.loading = false
        this.$notify.error({
          title: 'エラー',
          message: 'ログアウトに失敗しました'
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  .header {
    font-size: 1.4rem;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
