import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [PrismaModule, UserModule, StoreModule],
})
export class AppModule { }
