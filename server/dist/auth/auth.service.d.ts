import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { DoctorsService } from '../doctor/doctors.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateDoctorDto } from '../doctor/dto/create-doctor.dto';
export declare class AuthService {
    private userService;
    private doctorsService;
    private jwtServise;
    constructor(userService: UsersService, doctorsService: DoctorsService, jwtServise: JwtService);
    loginUser(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    loginDoctor(doctorDto: CreateDoctorDto): Promise<{
        token: string;
    }>;
    registerUser(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registerDoctor(doctorDto: CreateDoctorDto): Promise<{
        token: string;
    }>;
    private generateTokenUser;
    private generateTokenDoctor;
    private validateUser;
    private validateDoctor;
}
