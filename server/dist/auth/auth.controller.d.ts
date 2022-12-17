import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateDoctorDto } from '../doctor/dto/create-doctor.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
}
