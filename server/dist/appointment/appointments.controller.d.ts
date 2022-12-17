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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentsDto } from './dto/create-appointments.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AppointmentsController {
    private appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    createAppointment(createUserDto: CreateUserDto, doctorId: string): Promise<import("mongoose").Document<unknown, any, import("./appointments.schema").AppointmentDocument> & import("./appointments.schema").Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteAppointment(id: string): Promise<import("mongodb").DeleteResult>;
    changeAppointment(appointmentsDto: CreateAppointmentsDto, id: string): Promise<{
        user: import("../users/user.schema").User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        doctor: import("../doctor/doctor.schema").Doctor & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getDoctorAppointments(id: string): Promise<(import("mongoose").Document<unknown, any, import("./appointments.schema").AppointmentDocument> & import("./appointments.schema").Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getUserAppointments(id: string): Promise<(import("mongoose").Document<unknown, any, import("./appointments.schema").AppointmentDocument> & import("./appointments.schema").Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    find(): Promise<(import("mongoose").Document<unknown, any, import("./appointments.schema").AppointmentDocument> & import("./appointments.schema").Appointment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
