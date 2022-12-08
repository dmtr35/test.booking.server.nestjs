import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppointmentsService } from './appointments.service'
import { AppointmentsController } from './appointments.controller'

import { Appointment, AppointmentSchema } from '../appointment/appointments.schema'
import { User, UserSchema } from '../users/user.schema'
import { Doctor, DoctorSchema } from '../doctor/doctor.schema'

import { FileModule } from '../files/file.module'
import { AuthModule } from '../auth/auth.module'
import { UsersModule } from '../users/users.module'
import { DoctorsModule } from '../doctor/doctors.module'





@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  imports: [
    MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
      { name: User.name, schema: UserSchema },
      { name: Doctor.name, schema: DoctorSchema }
    ]),
    FileModule,
    AuthModule,
    UsersModule,
    DoctorsModule
  ],
  exports: [AppointmentsService]
})

export class AppointmentsModule { }
