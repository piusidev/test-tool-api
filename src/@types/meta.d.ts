interface IUser {
  id: string
  email: string
  name?: string
}

declare interface IBaseMeta {
  page: string
  user?: IUser
}
