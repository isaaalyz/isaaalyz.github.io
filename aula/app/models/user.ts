import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Papel from '#models/papel'

export default class User extends compose(BaseModel, AuthFinder) {
@column({ isPrimary: true })
declare id: number
@column()
declare fullName: string | null
@column()
declare email: string
@column({ serializeAs: null })
declare password: string
@column()
declare papel_id: number
@column.dateTime({ autoCreate: true })
declare createdAt: DateTime
@column.dateTime({ autoCreate: true, autoUpdate: true })
declare updatedAt: DateTime | null
static accessTokens = DbAccessTokensProvider.forModel(User)


@belongsTo(() => Papel, { foreignKey: 'curso_id' })
declare papel: BelongsTo<typeof Papel>
}