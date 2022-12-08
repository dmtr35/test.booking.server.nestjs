import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

import { Role } from '../shared/index'

export type DoctorDocument = Doctor & Document

@Schema()
export class Doctor {

  @Prop({ required: true })
  name: string
  
  @Prop({ unique: true, required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({default: Role.DOC})
  role: string

  @Prop()
  photo_avatar: string

  @Prop({ required: true })
  phone: string

  @Prop({ required: true })
  spec: string

  @Prop({ default: false })
  free: boolean

  @Prop({ type: [mongoose.Schema.Types.ObjectId]})
  appointments_accepted: []

}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)


