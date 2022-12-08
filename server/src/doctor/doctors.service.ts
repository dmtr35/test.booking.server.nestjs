import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'

import { Doctor, DoctorDocument } from './doctor.schema'
import { CreateDoctorDto } from './dto/create-doctor.dto'
import { FileService } from '../files/file.service'


@Injectable()
export class DoctorsService {
    constructor(@InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
        private fileService: FileService) { }

    async createDoctor(dto: CreateDoctorDto) {
        const user = await this.doctorModel.create(dto)
        return user
    }

    async getAllDoctors() {
        const users = await this.doctorModel.find()
        return users
    }

    async getDoctorByEmail(email: string) {
        const user = await this.doctorModel.findOne({ email })
        return user
    }

    async createPhoto(image: any, _id: string) {
        const fileName = await this.fileService.createFile(image, _id)
        const user = await this.doctorModel.findByIdAndUpdate({ _id }, { "$set": { "photo_avatar": fileName } }, { new: true })
        return user
    }


}


