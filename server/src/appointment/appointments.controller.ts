import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common'

import { AppointmentsService } from './appointments.service'
import { CreateAppointmentsDto } from './dto/create-appointments.dto'
import { CreateUserDto } from '../users/dto/create-user.dto'


@Controller('appointments')
export class AppointmentsController {

    constructor(private appointmentsService: AppointmentsService) { }



    @Post('/createAppointment/:doctorId')
    createAppointment(
        @Body() createUserDto: CreateUserDto,
        @Param('doctorId') doctorId: string) {
        return this.appointmentsService.createAppointment(doctorId, createUserDto)
    }

    @Delete('/deleteAppointment/:id')
    deleteAppointment(
        @Param('id') id: string) {
        return this.appointmentsService.deleteAppointment(id)
    }

    @Post('/changeAppointment/:id')
    changeAppointment(
        @Body() appointmentsDto: CreateAppointmentsDto,
        @Param('id') id: string) {
        return this.appointmentsService.changeAppointment(appointmentsDto, id)
    }

    @Get('/getDoctorAppointment/:id')
    getDoctorAppointments(@Param('id') id: string) {
        return this.appointmentsService.getDoctorAppointments(id)
    }

    @Get('/getUserAppointments/:id')
    getUserAppointments(@Param('id') id: string) {
        return this.appointmentsService.getUserAppointments(id)
    }
    
    @Get('/getAppointmentsAll')
    find() {
        return this.appointmentsService.find()
    }


}
