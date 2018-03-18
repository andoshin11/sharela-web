<template>
  <el-row class="header" v-loading.fullscreen.lock="loading">
    <el-col :span="12" :offset="6">
      <div class="header__title">シェアラWeb</div>
    </el-col>
    <el-col :span="6">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          メニュー<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item v-if="user" divided command="signOut">ログアウト</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
    handleCommand (cmd: string) {
      switch (cmd) {
        case 'signOut':
          this.signOut()
      }
    },
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
