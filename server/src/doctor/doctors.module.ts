import { forwardRef, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DoctorsController } from './doctors.controller'
import { DoctorsService } from './doctors.service'
import { Doctor, DoctorSchema } from './doctor.schema'
import { AuthModule } from '../auth/auth.module'
import { FileModule } from '../files/file.module'



@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [
    MongooseModule.forFeature([
      { name: Doctor.name, schema: DoctorSchema },
    ]),
    forwardRef(() => AuthModule),
    FileModule
  ],
  exports: [
    DoctorsService
  ]
})

export class DoctorsModule {}



