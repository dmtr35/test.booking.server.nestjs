import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Role } from '../shared/index'
import * as mongoose from 'mongoose'


export type UserDocument = User & Document

@Schema()
export class User {
  _id: mongoose.Types.ObjectId

  @Prop({ required: true })
  name: string
  
  @Prop({ unique: true, required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({default: Role.USER})
  role: string

  @Prop()
  photo_avatar: string

  @Prop({ required: true })
  phone: string

  @Prop({ type: [mongoose.Schema.Types.ObjectId]})
  appointments: []

}

export const UserSchema = SchemaFactory.createForClass(User)


