/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateAppointmentsDto } from './dto/create-appointments.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { FileService } from '../files/file.service';
import { Appointment, AppointmentDocument } from './appointments.schema';
import { User, UserDocument } from '../users/user.schema';
import { Doctor, DoctorDocument } from '../doctor/doctor.schema';
export declare class AppointmentsService {
    private appointmentModel;
    private userModel;
    private doctorModel;
    private fileService;
    constructor(appointmentModel: Model<AppointmentDocument>, userModel: Model<UserDocument>, doctorModel: Model<DoctorDocument>, fileService: FileService);
    createAppointment(doctorId: any, createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, any, AppointmentDocument> & Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteAppointment(_id: any): Promise<import("mongodb").DeleteResult>;
    changeAppointment(appointmentsDto: CreateAppointmentsDto, _id: any): Promise<{
        user: User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        doctor: Doctor & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getDoctorAppointments(_id: any): Promise<(import("mongoose").Document<unknown, any, AppointmentDocument> & Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getUserAppointments(_id: any): Promise<(import("mongoose").Document<unknown, any, AppointmentDocument> & Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    find(): Promise<(import("mongoose").Document<unknown, any, AppointmentDocument> & Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
