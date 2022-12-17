"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const file_module_1 = require("./files/file.module");
const users_module_1 = require("./users/users.module");
const doctors_module_1 = require("./doctor/doctors.module");
const appointments_module_1 = require("./appointment/appointments.module");
const nestjs_s3_1 = require("nestjs-s3");
const pay_module_1 = require("./pay/pay.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            nestjs_s3_1.S3Module.forRoot({
                config: {
                    region: process.env.AWS_REGION,
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                },
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: `.env`,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_HOST),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            users_module_1.UsersModule,
            file_module_1.FileModule,
            doctors_module_1.DoctorsModule,
            appointments_module_1.AppointmentsModule,
            pay_module_1.PayModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map