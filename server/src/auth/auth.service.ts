import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'

import { UsersService } from '../users/users.service'
import { DoctorsService } from '../doctor/doctors.service'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { CreateDoctorDto } from '../doctor/dto/create-doctor.dto'
import { User, UserDocument } from '../users/user.schema'
import { Doctor, DoctorDocument } from '../doctor/doctor.schema'





@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private doctorsService: DoctorsService,
        private jwtServise: JwtService) { }

        
    async loginUser(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateTokenUser(user)
    }
    async loginDoctor(doctorDto: CreateDoctorDto) {
        const doctor = await this.validateDoctor(doctorDto)
        return this.generateTokenDoctor(doctor)
    }



    async registerUser(userDto: CreateUserDto) {
        const candidateUser = await this.userService.getUserByEmail(userDto.email)
        if (candidateUser) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({ ...userDto, password: hashPassword })
        return this.generateTokenUser(user)
    }
    async registerDoctor(doctorDto: CreateDoctorDto) {
        const candidateDoctor = await this.doctorsService.getDoctorByEmail(doctorDto.email)
        if (candidateDoctor) {
            throw new HttpException('Доктор с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(doctorDto.password, 5)
        const doctor = await this.doctorsService.createDoctor({ ...doctorDto, password: hashPassword })
        return this.generateTokenDoctor(doctor)
    }



    private async generateTokenUser(user: UserDocument) {
        const payload = {
            _id: user._id,
            email: user.email,
            role: user.role
        }
        return {
            token: this.jwtServise.sign(payload)
        }
    }
    private async generateTokenDoctor(doctor: DoctorDocument) {
        const payload = {
            _id: doctor._id,
            email: doctor.email,
            role: doctor.role
        }
        return {
            token: this.jwtServise.sign(payload)
        }
    }



    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        if(!user) {
            throw new UnauthorizedException({ message: 'Некорретный емейл или пароль' })
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user?.password)
        if (user && passwordEquals) {
            return user
        }
    }
    private async validateDoctor(doctorDto: CreateDoctorDto) {
        const user = await this.doctorsService.getDoctorByEmail(doctorDto.email)
        if(!user) {
            throw new UnauthorizedException({ message: 'Некорретный емейл или пароль' })
        }
        const passwordEquals = await bcrypt.compare(doctorDto.password, user?.password)
        if (user && passwordEquals) {
            return user
        }
    }
}
