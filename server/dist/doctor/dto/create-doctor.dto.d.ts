import * as mongoose from 'mongoose';
export declare class CreateDoctorDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly type: string;
    readonly photo_avatar: string;
    readonly phone: string;
    readonly spec: string;
    readonly free: boolean;
    readonly appointments_accepted: [mongoose.Schema.Types.ObjectId];
}
