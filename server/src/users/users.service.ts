import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'

import { CreateUserDto } from './dto/create-user.dto'

import { User, UserDocument } from './user.schema'
import { FileService } from '../files/file.service'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    private fileService: FileService) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto)
        console.log(user)
        return user
    }

    async getAllUsers() {
        const users = await this.userModel.find()
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({ email })
        return user
    }

    async createPhoto(image: any, _id: string) {
        const fileName = await this.fileService.createFile(image, _id)
        const user = await this.userModel.findByIdAndUpdate({ _id }, { "$set": { "photo_avatar": fileName } }, { new: true })
        return user
    }
}


