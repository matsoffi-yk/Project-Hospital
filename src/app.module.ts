import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
