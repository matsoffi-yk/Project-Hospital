import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersDTO } from './dto/user.dto';
import { Users } from './users.entity';
import { UsersRepository } from "./users.repository";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository
    ) { }

    async getUsers(): Promise<any> {
        const users = await this.usersRepository.getUsers();
        console.log(users)
        return { success: true, users: users }
    }

    async createUser(createUserDTO: UsersDTO): Promise<Users> {
        return this.usersRepository.createUser(createUserDTO);
    }

    async updateUser(id: number, updateUser: UsersDTO): Promise<any> {
        const foundId = await this.usersRepository.findOne(id)
        const user = foundId;

        user.username = updateUser.username
        user.password = updateUser.password
        user.name = updateUser.name
        user.surname = updateUser.surname
        user.nickname = updateUser.nickname
        user.age = updateUser.age
        user.phoneNumber = updateUser.phoneNumber
        user.line = updateUser.line
        user.email = updateUser.email
        user.village = updateUser.address.village
        user.subDistrict = updateUser.address.subDistrict
        user.district = updateUser.address.district
        user.province = updateUser.address.province
        user.postalCode = updateUser.address.postalCode
        user.country = updateUser.address.country

        try {
            await user.save();
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
        return user
    }

    async deleteUser(id: number): Promise<any> {
        await this.usersRepository.delete(id);
        return { message: `ID ${id} deleted` };
    }
}
