import { Body, Controller, Post, Get, UseGuards, Param, UsePipes, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import { CreateDoctorDto } from './dto/create-doctor.dto'
import { DoctorsService } from './doctors.service'

import { ValidationPipe } from '../pipes/validation.pipe'
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../auth/roles-auth.decorator'
import { Role } from '../shared/index'



@Controller('users')
export class DoctorsController {


    constructor(private doctorsService: DoctorsService) { }

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() doctorDto: CreateDoctorDto) {
        return this.doctorsService.createDoctor(doctorDto)
    }

    @Roles(Role.DOC)
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.doctorsService.getAllDoctors()
    }

    @Post('/createPhotoDoctor/:id')
    @UseInterceptors(FileInterceptor('image'))
    createPhoto(
        @Param('id') id: string,
        @UploadedFile() image: any) {
        return this.doctorsService.createPhoto(image, id)
    }

}