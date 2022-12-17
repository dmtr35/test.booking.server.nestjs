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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const users_service_1 = require("../users/users.service");
const doctors_service_1 = require("../doctor/doctors.service");
let AuthService = class AuthService {
    constructor(userService, doctorsService, jwtServise) {
        this.userService = userService;
        this.doctorsService = doctorsService;
        this.jwtServise = jwtServise;
    }
    async loginUser(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateTokenUser(user);
    }
    async loginDoctor(doctorDto) {
        const doctor = await this.validateDoctor(doctorDto);
        return this.generateTokenDoctor(doctor);
    }
    async registerUser(userDto) {
        const candidateUser = await this.userService.getUserByEmail(userDto.email);
        if (candidateUser) {
            throw new common_1.HttpException('Пользователь с таким email уже существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        return this.generateTokenUser(user);
    }
    async registerDoctor(doctorDto) {
        const candidateDoctor = await this.doctorsService.getDoctorByEmail(doctorDto.email);
        if (candidateDoctor) {
            throw new common_1.HttpException('Доктор с таким email уже существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(doctorDto.password, 5);
        const doctor = await this.doctorsService.createDoctor(Object.assign(Object.assign({}, doctorDto), { password: hashPassword }));
        return this.generateTokenDoctor(doctor);
    }
    async generateTokenUser(user) {
        const payload = {
            _id: user._id,
            email: user.email,
            role: user.role
        };
        return {
            token: this.jwtServise.sign(payload)
        };
    }
    async generateTokenDoctor(doctor) {
        const payload = {
            _id: doctor._id,
            email: doctor.email,
            role: doctor.role
        };
        return {
            token: this.jwtServise.sign(payload)
        };
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException({ message: 'Некорретный емейл или пароль' });
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user === null || user === void 0 ? void 0 : user.password);
        if (user && passwordEquals) {
            return user;
        }
    }
    async validateDoctor(doctorDto) {
        const user = await this.doctorsService.getDoctorByEmail(doctorDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException({ message: 'Некорретный емейл или пароль' });
        }
        const passwordEquals = await bcrypt.compare(doctorDto.password, user === null || user === void 0 ? void 0 : user.password);
        if (user && passwordEquals) {
            return user;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        doctors_service_1.DoctorsService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map