"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const appointments_service_1 = require("./appointments.service");
const appointments_controller_1 = require("./appointments.controller");
const appointments_schema_1 = require("../appointment/appointments.schema");
const user_schema_1 = require("../users/user.schema");
const doctor_schema_1 = require("../doctor/doctor.schema");
const file_module_1 = require("../files/file.module");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
const doctors_module_1 = require("../doctor/doctors.module");
let AppointmentsModule = class AppointmentsModule {
};
AppointmentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [appointments_controller_1.AppointmentsController],
        providers: [appointments_service_1.AppointmentsService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: appointments_schema_1.Appointment.name, schema: appointments_schema_1.AppointmentSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: doctor_schema_1.Doctor.name, schema: doctor_schema_1.DoctorSchema }
            ]),
            file_module_1.FileModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            doctors_module_1.DoctorsModule
        ],
        exports: [appointments_service_1.AppointmentsService]
    })
], AppointmentsModule);
exports.AppointmentsModule = AppointmentsModule;
//# sourceMappingURL=appointments.module.js.map