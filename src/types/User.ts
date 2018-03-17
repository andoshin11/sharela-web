export interface User {
  displayName: string,
  email: string,
  photoURL: string,
  uid: string
}

export interface UserState {
  user: null | User
}
