export interface RawUser {
  displayName: string,
  email: string,
  photoURL: string,
  uid: string
}

export interface User {
  displayName: string,
  email: string,
  photoURL: string,
  uid: string,
  verified: boolean
}

export interface UserState {
  user: null | User
}
