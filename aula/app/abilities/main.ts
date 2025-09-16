import User from '#models/user'
import Post from '#models/post'
import { Bouncer } from '@adonisjs/bouncer'
// Um usuário só pode editar seu próprio post
export const editPost = Bouncer.ability((user: User, post: Post) => {
return user.id === post.userId
})