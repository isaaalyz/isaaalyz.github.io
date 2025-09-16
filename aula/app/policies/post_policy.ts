import User from '#models/user'
import Post from '#models/post'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'
export default class PostPolicy extends BasePolicy {
// Qualquer usuário logado pode criar um post
create(user: User): AuthorizerResponse {

return true
}
// Apenas o autor pode editar o post
edit(user: User, post: Post): AuthorizerResponse {
return user.id === post.userId
}
// Apenas o autor pode deletar o post
delete(user: User, post: Post): AuthorizerResponse {
return user.id === post.userId
}
}