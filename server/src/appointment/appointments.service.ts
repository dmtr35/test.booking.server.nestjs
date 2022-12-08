import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CreateAppointmentsDto } from './dto/create-appointments.dto'
import { CreateUserDto } from '../users/dto/create-user.dto'

import { FileService } from '../files/file.service'
import { Appointment, AppointmentDocument } from './appointments.schema'
import { User, UserDocument } from '../users/user.schema'
import { Doctor, DoctorDocument } from '../doctor/doctor.schema'

import { cronJobFirst, cronJobSecond } from 'src/services/cron_jobs'



@Injectable()
export class AppointmentsService {

    constructor(@InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
        private fileService: FileService,
    ) { }

    async createAppointment(doctorId, createUserDto: CreateUserDto) {
        const appointment = await this.appointmentModel.create({ userId: createUserDto._id, doctorId })
        return appointment
    }

    async deleteAppointment(_id) {
        const appointment = await this.appointmentModel.deleteOne({ _id })
        console.log('appointment:', appointment)
        return appointment
    }

    async changeAppointment(appointmentsDto: CreateAppointmentsDto, _id) {
        const appointment = await this.appointmentModel.findByIdAndUpdate({ _id }, { '$set': appointmentsDto }, { new: true })
        const user = await this.userModel.findByIdAndUpdate({ _id: appointment.userId }, { "$push": { "appointments": appointment.id } }, { new: true })
        const doctor = await this.doctorModel.findByIdAndUpdate({ _id: appointment.doctorId }, { '$push': { "appointments_accepted": appointment.id } }, { new: true })

        const time = new Date(Date.now() + ( 3603 * 1000 * 2)).toISOString().slice(11, -8)
        const date = new Date(Date.now() + ( 3603 * 1000 * 2)).toISOString().slice(5, -5).replace(/[T]/gi, ' ')
        const dateFirstMessage = new Date(Date.now() + ( 3602 * 1000 * 2)).toISOString().slice(5, -5).replace(/[^0-9\s]/gi, ' ').split(' ').reverse().join(' ') + ' *'
        const dateSecondMessage = new Date(Date.now() + ( 3602 * 1000 * 24)).toISOString().slice(5, -5).replace(/[^0-9\s]/gi, ' ').split(' ').reverse().join(' ') + ' *'

        const messageFirst = `${date} | Привет ${user.name}! Напоминаем что вы записаны к ${doctor.name} на завтра в ${time}\n`
        const messageSecond = `${date} | Привет ${user.name}! Вам через 2 часа к ${doctor.name} в ${time}\n`

        cronJobFirst(dateFirstMessage, messageFirst)
        cronJobSecond(dateSecondMessage, messageSecond)

        return { user, doctor }
    }


    async getDoctorAppointments(_id) {
        const { appointments_accepted } = await this.doctorModel.findOne({ _id })
        const allAppointments = await this.appointmentModel.find({ _id: { $in: appointments_accepted } })
        return allAppointments
    }

    async getUserAppointments(_id) {
        const { appointments } = await this.userModel.findOne({ _id })
        const allUserAppointments = await this.appointmentModel.find({ _id: { $in: appointments } })
        return allUserAppointments
    }


}

