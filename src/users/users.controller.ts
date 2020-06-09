import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './dto/user.dto';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    //เลือกส่ง
    @Get('/getusers')
    async getUsers() {
        return await this.usersService.getUsers()
    }

    @Post('/createuser')
    async createUser(
        @Body() createUserDTO: UsersDTO
    ): Promise<Users> {
        return this.usersService.createUser(createUserDTO);
    }

    @Patch('/updateuser/:id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUser: UsersDTO
    ) {
        return await this.usersService.updateUser(id, updateUser)
    }

    @Delete('/deleteuser/:id')
    async deleteUser(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return await this.usersService.deleteUser(id)
    }
}
