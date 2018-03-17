import { ActionTree } from 'vuex'

// types
import { RootState } from '@/types/Store'
import { User, UserState } from '@/types/User'

// action types
import { SET_USER } from './actionTypes'

// mutation types
import { UPDATE_USER } from './mutationTypes'

const actions: ActionTree<UserState, RootState> = {
  [SET_USER] ({ commit }, user: User): void {
    commit(UPDATE_USER, user as User)
  }
}

export default actions
