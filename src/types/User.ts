export interface User {
  displayName: string,
  email: string,
  photoURL: string
}

export interface UserState {
  user: null | User
}
