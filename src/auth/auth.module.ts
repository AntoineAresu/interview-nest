import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, UsersService, PrismaService],
})
export class AuthModule {}
