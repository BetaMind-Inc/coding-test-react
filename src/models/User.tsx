export type User = {
  id: number
  name: string
  maybeFriendIds?: User[]
}