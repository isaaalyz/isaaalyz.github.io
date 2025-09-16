import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'
import PostPolicy from '#policies/post_policy'
import { editPost } from '#abilities/main'
export default class PostsController {
async update({ bouncer, params, request }: HttpContext) {
const post = await Post.findOrFail(params.id)
if (await bouncer.denies(editPost, post)) {
return response.forbidden('Você não tem permissão para editar este post.')
}
async destroy({ bouncer, params, request }: HttpContext) {
const post = await Post.findOrFail(params.id)
if (await bouncer.with(PostPolicy).denies('delete', post)) {
return response.forbidden('Você não tem permissão para deletar este post.')
}
// Lógica para deletar o post
}
}
}
