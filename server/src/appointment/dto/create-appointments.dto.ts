import * as mongoose from 'mongoose'




export class CreateAppointmentsDto {

    readonly userId: mongoose.Schema.Types.ObjectId

    readonly doctorId: mongoose.Schema.Types.ObjectId

    readonly date: string

    readonly active: boolean
}







