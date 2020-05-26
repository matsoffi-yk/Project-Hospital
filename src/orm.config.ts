import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
    type: "postgres",
    username: 'postgres',
    password: '123456789',
    port: 5432,
    host: 'localhost',
    database: 'testDB',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
};