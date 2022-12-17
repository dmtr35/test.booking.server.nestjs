import * as mongoose from 'mongoose';
export declare class CreateUserDto {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly type: string;
    readonly photo_avatar: string;
    readonly phone: string;
    readonly appointments: [mongoose.Schema.Types.ObjectId];
}
