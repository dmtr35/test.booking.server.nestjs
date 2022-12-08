import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

import { User } from '../users/user.schema'
import { Doctor } from '../doctor/doctor.schema'



export type AppointmentDocument = Appointment & Document

@Schema()
export class Appointment {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => User })
  userId: mongoose.Schema.Types.ObjectId

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Doctor })
  doctorId: mongoose.Schema.Types.ObjectId

  @Prop({ type: Date, default: new Date(Date.now() + ( 3600 * 1000 * 24)) })
  date: string

  @Prop({ default: false })
  active: boolean
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment)





