import { ActionTree } from 'vuex'
import * as firebase from "firebase"

// types
import { RootState } from '@/types/Store'
import { User, UserState } from '@/types/User'

// action types
import { SIGN_IN, SIGN_OUT, GET_USERS } from './actionTypes'

// mutation types
import { UPDATE_USER, CLEAR_USER, SET_USERS } from './mutationTypes'

const actions: ActionTree<UserState, RootState> = {
  [SIGN_IN] ({ commit }, user: User): void {
    commit(UPDATE_USER, user as User)
  },
  [SIGN_OUT] ({ commit }): void {
    commit(CLEAR_USER)
  },
  async [GET_USERS] ({ commit }): Promise<void> {
    const snapshot = await firebase.database().ref('/users').once('value')

    let users: User[] = []

    snapshot.forEach(s => {
      const user = s.val()

      const data: User = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        verified: user.verified
      }
      users.push(data)
    })

    commit(SET_USERS, users)
  }
}

export default actions
