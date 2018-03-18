import { MutationTree } from 'vuex'

// types
import { User, UserState } from '@/types/User'

// mutation types
import { UPDATE_USER, CLEAR_USER, SET_USERS } from './mutationTypes'

const mutations: MutationTree<UserState> = {
  [UPDATE_USER](state, user: User): void {
    state.user = user
  },
  [CLEAR_USER](state): void {
    state.user = null
  },
  [SET_USERS](state, users: User[]): void {
    state.list = users
  }
}

export default mutations
