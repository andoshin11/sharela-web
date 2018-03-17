import { ActionTree } from 'vuex'

// types
import { RootState } from '@/types/Store'
import { User, UserState } from '@/types/User'

// action types
import { SIGN_IN, SIGN_OUT } from './actionTypes'

// mutation types
import { UPDATE_USER, CLEAR_USER } from './mutationTypes'

const actions: ActionTree<UserState, RootState> = {
  [SIGN_IN] ({ commit }, user: User): void {
    commit(UPDATE_USER, user as User)
  },
  [SIGN_OUT] ({ commit }): void {
    commit(CLEAR_USER)
  }
}

export default actions
