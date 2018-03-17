import { Module } from 'vuex'

// types
import { RootState } from '@/types/Store'
import { UserState } from '@/types/User'

import state from './state'
import actions from './actions'
import mutations from './mutations'

const namespaced: boolean = true

const store: Module<UserState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
}

export default store
