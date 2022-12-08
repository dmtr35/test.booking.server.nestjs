import { forwardRef, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { User, UserSchema } from './user.schema'

import { AuthModule } from '../auth/auth.module'
import { FileModule } from '../files/file.module'



@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
    forwardRef(() => AuthModule),
    FileModule
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}



