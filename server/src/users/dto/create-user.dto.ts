import { IsString, Length, IsEmail } from 'class-validator'
import * as mongoose from 'mongoose'




export class CreateUserDto {
  readonly _id: mongoose.Schema.Types.ObjectId

  readonly name: string

  @IsEmail({}, { message: 'Некорретный email' })
  readonly email: string

  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 64, { message: 'Пароль не меньше 4 и не больше 64 символов' })
  readonly password: string

  readonly type: string

  readonly photo_avatar: string

  readonly phone: string

  readonly appointments: [mongoose.Schema.Types.ObjectId]
}

