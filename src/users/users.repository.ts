import { Repository, EntityRepository } from "typeorm"
import { NotFoundException } from '@nestjs/common';
import { UsersDTO } from './dto/user.dto';
import { Users } from './users.entity';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {

    async getUsers(): Promise<Users[]> {
        const users = await this.query(`SELECT * FROM users`);

        try {
            return users
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async createUser(createUserDTO: UsersDTO): Promise<any> {
        const user = new Users();
        const { username, password } = createUserDTO;
        const findUsername = await this.createQueryBuilder('users')
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

        user.username = createUserDTO.username
        user.password = createUserDTO.password
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

        try {
            await user.save()
        } catch (error) {
            throw new NotFoundException({
                succress: false,
                error: error.message
            });
        }

        return user;
    }
}