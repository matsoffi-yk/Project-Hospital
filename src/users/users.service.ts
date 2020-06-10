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
            const { username, password, confirmPassword } = updateUser;
            const findusername = await this.usersRepository.createQueryBuilder('users')
                .andWhere('users.username = :username', { username })
                .getOne()

            if (username.length < 4) {
                return { message: 'username must be longer than 4' };
            }
            if (password.length < 6) {
                return { message: 'password must be longer than 6' };
            }
            if (findusername) {
                return { message: 'this username already exists' };
            }
            if (password !== confirmPassword) {
                return { message: 'wrong password' };
            }

            const foundid = await this.usersRepository.findOne(id)
            const user = foundid;

            user.username = updateUser.username
            user.password = this.hashpass(updateUser.password)
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
