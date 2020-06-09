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
        return { success: true, users: users }
    }

    async createUser(createUserDTO: UsersDTO): Promise<any> {
        return this.usersRepository.createUser(createUserDTO);
    }

    async updateUser(id: number, updateUser: UsersDTO): Promise<any> {
        const { username, password } = updateUser;
        const findUsername = await this.usersRepository.createQueryBuilder('users')
            .andWhere('users.username = :username', { username })
            .getOne()
            
        if (username.length < 4) {
            return { message: 'username must be longer than 4' };
        }
        else if (password.length < 6) {
            return { message: 'password must be longer than 6' };
        } else if (findUsername) {
            return { message: 'this username already exists' };
        }

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
