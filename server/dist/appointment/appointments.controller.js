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
exports.AppointmentsController = void 0;
const common_1 = require("@nestjs/common");
const appointments_service_1 = require("./appointments.service");
const create_appointments_dto_1 = require("./dto/create-appointments.dto");
const create_user_dto_1 = require("../users/dto/create-user.dto");
let AppointmentsController = class AppointmentsController {
    constructor(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    createAppointment(createUserDto, doctorId) {
        return this.appointmentsService.createAppointment(doctorId, createUserDto);
    }
    deleteAppointment(id) {
        return this.appointmentsService.deleteAppointment(id);
    }
    changeAppointment(appointmentsDto, id) {
        return this.appointmentsService.changeAppointment(appointmentsDto, id);
    }
    getDoctorAppointments(id) {
        return this.appointmentsService.getDoctorAppointments(id);
    }
    getUserAppointments(id) {
        return this.appointmentsService.getUserAppointments(id);
    }
    find() {
        return this.appointmentsService.find();
    }
};
__decorate([
    (0, common_1.Post)('/createAppointment/:doctorId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "createAppointment", null);
__decorate([
    (0, common_1.Delete)('/deleteAppointment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "deleteAppointment", null);
__decorate([
    (0, common_1.Post)('/changeAppointment/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_appointments_dto_1.CreateAppointmentsDto, String]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "changeAppointment", null);
__decorate([
    (0, common_1.Get)('/getDoctorAppointment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "getDoctorAppointments", null);
__decorate([
    (0, common_1.Get)('/getUserAppointments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "getUserAppointments", null);
__decorate([
    (0, common_1.Get)('/getAppointmentsAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "find", null);
AppointmentsController = __decorate([
    (0, common_1.Controller)('appointments'),
    __metadata("design:paramtypes", [appointments_service_1.AppointmentsService])
], AppointmentsController);
exports.AppointmentsController = AppointmentsController;
//# sourceMappingURL=appointments.controller.js.map