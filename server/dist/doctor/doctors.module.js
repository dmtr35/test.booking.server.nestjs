"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const doctors_controller_1 = require("./doctors.controller");
const doctors_service_1 = require("./doctors.service");
const doctor_schema_1 = require("./doctor.schema");
const auth_module_1 = require("../auth/auth.module");
const file_module_1 = require("../files/file.module");
let DoctorsModule = class DoctorsModule {
};
DoctorsModule = __decorate([
    (0, common_1.Module)({
        controllers: [doctors_controller_1.DoctorsController],
        providers: [doctors_service_1.DoctorsService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: doctor_schema_1.Doctor.name, schema: doctor_schema_1.DoctorSchema },
            ]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            file_module_1.FileModule
        ],
        exports: [
            doctors_service_1.DoctorsService
        ]
    })
], DoctorsModule);
exports.DoctorsModule = DoctorsModule;
//# sourceMappingURL=doctors.module.js.map