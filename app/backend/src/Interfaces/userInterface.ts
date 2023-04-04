export interface IUser {
  id?: number,
  username: string,
  role: string,
  email: string,
  password?: string,
}

export interface ILogin {
  type: number | null;
  message?: string
  token?: string
}
