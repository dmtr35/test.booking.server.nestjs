"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const file_service_1 = require("../files/file.service");
const appointments_schema_1 = require("./appointments.schema");
const user_schema_1 = require("../users/user.schema");
const doctor_schema_1 = require("../doctor/doctor.schema");
const cron_jobs_1 = require("../services/cron_jobs");
let AppointmentsService = class AppointmentsService {
    constructor(appointmentModel, userModel, doctorModel, fileService) {
        this.appointmentModel = appointmentModel;
        this.userModel = userModel;
        this.doctorModel = doctorModel;
        this.fileService = fileService;
    }
    async createAppointment(doctorId, createUserDto) {
        const appointment = await this.appointmentModel.create({ userId: createUserDto._id, doctorId });
        return appointment;
    }
    async deleteAppointment(_id) {
        const appointment = await this.appointmentModel.deleteOne({ _id });
        console.log('appointment:', appointment);
        return appointment;
    }
    async changeAppointment(appointmentsDto, _id) {
        const appointment = await this.appointmentModel.findByIdAndUpdate({ _id }, { '$set': appointmentsDto }, { new: true });
        const user = await this.userModel.findByIdAndUpdate({ _id: appointment.userId }, { "$push": { "appointments": appointment.id } }, { new: true });
        const doctor = await this.doctorModel.findByIdAndUpdate({ _id: appointment.doctorId }, { '$push': { "appointments_accepted": appointment.id } }, { new: true });
        const time = new Date(Date.now() + (3603 * 1000 * 2)).toISOString().slice(11, -8);
        const date = new Date(Date.now() + (3603 * 1000 * 2)).toISOString().slice(5, -5).replace(/[T]/gi, ' ');
        const dateFirstMessage = new Date(Date.now() + (3602 * 1000 * 2)).toISOString().slice(5, -5).replace(/[^0-9\s]/gi, ' ').split(' ').reverse().join(' ') + ' *';
        const dateSecondMessage = new Date(Date.now() + (3602 * 1000 * 24)).toISOString().slice(5, -5).replace(/[^0-9\s]/gi, ' ').split(' ').reverse().join(' ') + ' *';
        const messageFirst = `${date} | Привет ${user.name}! Напоминаем что вы записаны к ${doctor.name} на завтра в ${time}\n`;
        const messageSecond = `${date} | Привет ${user.name}! Вам через 2 часа к ${doctor.name} в ${time}\n`;
        (0, cron_jobs_1.cronJobFirst)(dateFirstMessage, messageFirst);
        (0, cron_jobs_1.cronJobSecond)(dateSecondMessage, messageSecond);
        return { user, doctor };
    }
    async getDoctorAppointments(_id) {
        const { appointments_accepted } = await this.doctorModel.findOne({ _id });
        const allAppointments = await this.appointmentModel.find({ _id: { $in: appointments_accepted } });
        return allAppointments;
    }
    async getUserAppointments(_id) {
        const { appointments } = await this.userModel.findOne({ _id });
        const allUserAppointments = await this.appointmentModel.find({ _id: { $in: appointments } });
        return allUserAppointments;
    }
    async find() {
        const response = await this.appointmentModel.find();
        console.log(response);
        return response;
    }
};
AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(appointments_schema_1.Appointment.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        file_service_1.FileService])
], AppointmentsService);
exports.AppointmentsService = AppointmentsService;
//# sourceMappingURL=appointments.service.js.map