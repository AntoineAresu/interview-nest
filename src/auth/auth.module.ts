import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '15min' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    UsersService,
    PrismaService,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
