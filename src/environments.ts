import { User } from "./app/App"

const localAdmin: User = {
  name: 'admin',
  password: 'admin',
  role: 'admin'
}

export const environments = {
  api: 'https://suspectsearch.pythonanywhere.com',
  localAdmin,
  localApi: 'http://127.0.0.1:8000'
}