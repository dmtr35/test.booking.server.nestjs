import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type DoctorDocument = Doctor & Document;
export declare class Doctor {
    name: string;
    email: string;
    password: string;
    role: string;
    photo_avatar: string;
    phone: string;
    spec: string;
    free: boolean;
    appointments_accepted: [];
}
export declare const DoctorSchema: mongoose.Schema<Doctor, mongoose.Model<Doctor, any, any, any, any>, {}, {}, {}, {}, "type", Doctor>;
