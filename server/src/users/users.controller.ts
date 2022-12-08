import { Body, Controller, Post, Get, UseGuards, Param, UsePipes, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { Roles } from '../auth/roles-auth.decorator'
import { RolesGuard } from '../auth/roles.guard'
import { ValidationPipe } from '../pipes/validation.pipe'
import { Role } from '../shared/index'

@Controller('users')
export class UsersController {


    constructor(private usersService: UsersService) { }

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Roles(Role.DOC)
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @Post('/createPhotoUser/:id')
    @UseInterceptors(FileInterceptor('image'))
    createPhoto(
        @Param('id') id: string,
        @UploadedFile() image: any) {
        return this.usersService.createPhoto(image, id)
    }
}