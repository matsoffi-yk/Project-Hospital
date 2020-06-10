import { Repository, EntityRepository } from "typeorm"
import { NotFoundException } from '@nestjs/common';
import { UsersDTO } from './dto/user.dto';
import { Users } from './users.entity';
import * as bcrypt from 'bcryptjs';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {

    async getUsers(): Promise<Users[]> {
        try {
            const users = await this.createQueryBuilder('users')
                .getMany();

            users.forEach(user => {
                delete user.username;
                delete user.password;
            })
            return users
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    hashpass(password: string) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    async createUser(createUserDTO: UsersDTO): Promise<any> {
        try {
            const user = new Users();
            const { username, password, confirmPassword } = createUserDTO;
            const findUsername = await this.createQueryBuilder('users')
                .where('users.username = :username', { username })
                .getOne()

            if (username.length < 4) {
                return { message: 'username must be longer than 4' };
            }
            if (password.length < 6) {
                return { message: 'password must be longer than 6' };
            }
            if (findUsername) {
                return { message: 'this username already exists' };
            }
            if (password !== confirmPassword) {
                return { message: 'wrong password' };
            }

            user.username = createUserDTO.username
            user.password = this.hashpass(createUserDTO.password)
            user.name = createUserDTO.name
            user.surname = createUserDTO.surname
            user.nickname = createUserDTO.nickname
            user.age = createUserDTO.age
            user.phoneNumber = createUserDTO.phoneNumber
            user.line = createUserDTO.line
            user.email = createUserDTO.email
            user.village = createUserDTO.address.village
            user.subDistrict = createUserDTO.address.subDistrict
            user.district = createUserDTO.address.district
            user.province = createUserDTO.address.province
            user.postalCode = createUserDTO.address.postalCode
            user.country = createUserDTO.address.country
            // console.log(bcrypt.compareSync(password, user.password))
            await user.save()
            return user;
        } catch (error) {
            throw new NotFoundException({
                succress: false,
                error: error.message
            });
        }


    }
}