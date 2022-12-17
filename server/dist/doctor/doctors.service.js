"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsService = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const doctor_schema_1 = require("./doctor.schema");
const file_service_1 = require("../files/file.service");
let DoctorsService = class DoctorsService {
    constructor(doctorModel, fileService) {
        this.doctorModel = doctorModel;
        this.fileService = fileService;
    }
    async createDoctor(dto) {
        const user = await this.doctorModel.create(dto);
        return user;
    }
    async getAllDoctors() {
        const users = await this.doctorModel.find();
        return users;
    }
    async getDoctorByEmail(email) {
        const user = await this.doctorModel.findOne({ email });
        return user;
    }
    async createPhoto(image, _id) {
        const fileName = await this.fileService.createFile(image, _id);
        const user = await this.doctorModel.findByIdAndUpdate({ _id }, { "$set": { "photo_avatar": fileName } }, { new: true });
        return user;
    }
};
DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        file_service_1.FileService])
], DoctorsService);
exports.DoctorsService = DoctorsService;
//# sourceMappingURL=doctors.service.js.map