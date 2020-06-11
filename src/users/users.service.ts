import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersDTO } from './dto/user.dto';
import { UsersRepository } from "./users.repository";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';

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

    hashpass(password: string) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
    async updateUser(id: number, updateUser: UsersDTO): Promise<any> {
        try {
            const user = await this.usersRepository.findOne(id)
            if (!user) {
                return { message: 'Not found id' }
            }

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

            delete user.username;
            delete user.password;
            await user.save();
            return user
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async deleteUser(id: number): Promise<any> {
        const user = await this.usersRepository.findOne(id)
        if (!user) {
            return { message: 'Not found id' }
        }
        await this.usersRepository.delete(id);
        return { message: `ID ${id} deleted` };
    }

    async findOne(username: string): Promise<any> {
        const founduser = await this.usersRepository.createQueryBuilder('users')
            .andWhere('users.username = :username', { username })
            .getOne()
        console.log(founduser)
        return founduser;
    }
}
