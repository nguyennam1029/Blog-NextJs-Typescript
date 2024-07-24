import http from '@/lib/http'
import { AccountResType, UserPostsResType } from '@/schemaValidations/account.schema'
import { ProductListResType } from '@/schemaValidations/post.schema'

const accountApiRequest = {
  me: (sessionToken: string) =>
    http.get<AccountResType>("/account/me", {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  meClient: () => http.get<AccountResType>('auth/me'),
  getUserPosts: () => http.get<UserPostsResType>('account/posts'),

}

export default accountApiRequest