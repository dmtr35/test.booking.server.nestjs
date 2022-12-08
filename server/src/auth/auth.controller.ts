import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { CreateUserDto } from '../users/dto/create-user.dto'
import { CreateDoctorDto } from '../doctor/dto/create-doctor.dto'
import { AuthService } from './auth.service'
import { ValidationPipe } from '../pipes/validation.pipe'


@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/loginUser')
    loginUser(@Body() userDto: CreateUserDto) {
        return this.authService.loginUser(userDto)
    }
    @Post('/loginDoctor')
    loginDoctor(@Body() doctorDto: CreateDoctorDto) {
        return this.authService.loginDoctor(doctorDto)
    }

    
    @UsePipes(ValidationPipe)
    @Post('/registrationUser')
    registerUser(@Body() userDto: CreateUserDto) {
        return this.authService.registerUser(userDto)
    }
    @UsePipes(ValidationPipe)
    @Post('/registrationDoctor')
    registerDoctor(@Body() doctorDto: CreateDoctorDto) {
        return this.authService.registerDoctor(doctorDto)
    }
}

