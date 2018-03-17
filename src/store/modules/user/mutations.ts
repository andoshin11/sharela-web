import { MutationTree } from 'vuex'

// types
import { User, UserState } from '@/types/User'

// mutation types
import { UPDATE_USER } from './mutationTypes'

const mutations: MutationTree<UserState> = {
  [UPDATE_USER](state, user: User): void {
    state.user = user
  }
}

export default mutations
