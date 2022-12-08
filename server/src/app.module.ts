import { Module, forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { FileModule } from './files/file.module'
import { UsersModule } from './users/users.module'
import { DoctorsModule } from './doctor/doctors.module'
import { AppointmentsModule } from './appointment/appointments.module'

import { S3Module } from 'nestjs-s3'

@Module({
    controllers: [],
    providers: [],
    imports: [
        S3Module.forRoot({
            config: {
                region: process.env.AWS_REGION,
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
          }),
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),
        MongooseModule.forRoot(process.env.MONGODB_HOST),
        forwardRef(() => AuthModule),
        UsersModule,
        FileModule,
        DoctorsModule,
        AppointmentsModule
    ]
})

export class AppModule { }







