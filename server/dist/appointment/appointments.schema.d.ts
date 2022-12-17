import * as mongoose from 'mongoose';
export declare type AppointmentDocument = Appointment & Document;
export declare class Appointment {
    userId: mongoose.Schema.Types.ObjectId;
    doctorId: mongoose.Schema.Types.ObjectId;
    date: string;
    active: boolean;
}
export declare const AppointmentSchema: mongoose.Schema<Appointment, mongoose.Model<Appointment, any, any, any, any>, {}, {}, {}, {}, "type", Appointment>;
