import { Module, ConsoleLogger } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/models/user.entity';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from '@/common/constants/aliyun';
import { JwtStrategy } from './jwt.strategy';
import { Student } from '../student/models/student.entity';
import { StudentService } from '../student/student.service';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 60 * 24 * 7 + 's',
      },
    }),
    TypeOrmModule.forFeature([User, Student]),
  ],
  providers: [
    JwtStrategy,
    ConsoleLogger,
    AuthService,
    AuthResolver,
    UserService,
    StudentService,
  ],
  exports: [],
})
export class AuthModule {}
