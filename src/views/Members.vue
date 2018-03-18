<template>
  <div class="members">
    <el-table
      :data="users"
      style="width: 100%">
      <el-table-column
        prop="displayName"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email"
        width="180">
      </el-table-column>
      <el-table-column
        prop="uid"
        label="uid">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

// vuex
import { GET_USERS } from '@/store/modules/user/actionTypes'

export default Vue.extend({
  computed: {
    ...mapState('user', {
      users: state => state.list
    })
  },
  methods: {
    ...mapActions('user', [GET_USERS])
  },
  mounted () {
    this.GET_USERS()
  }
})
</script>
