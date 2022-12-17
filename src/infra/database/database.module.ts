import { PrismaNotificationsRepository } from './Prisma/repositories/prisma-notifications-repository';
import { NotificationsRepository } from '@application/repositories/notification-repositories';
import { Module } from '@nestjs/common';
import { PrismaService } from './Prisma/prisma.service';

@Module({
  providers: [PrismaService,{
    provide:NotificationsRepository,
    useClass: PrismaNotificationsRepository
  }],
  exports: [
    NotificationsRepository
  ]
})
export class DatabaseModule {}
