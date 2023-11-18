import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { OSSModule } from './modules/oss/oss.module';
import { AuthModule } from './modules/auth/auth.module';
import { StudentModule } from './modules/student/student.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { CourseModule } from './modules/course/course.module';
import { CardModule } from './modules/card/card.module';
import { ProductModule } from './modules/product/product.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { WxpayModule } from './modules/wxpay/wxpay.module';
import { OrderModule } from './modules/order/order.module';
import { WxorderModule } from './modules/wxorder/wxorder.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { ScheduleRecordModule } from './modules/schedule-record/schedule-record.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysqlserver', //如果是部署到docker上，要改为host.docker.internal
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'help-drop',
      entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`], //那些文件时数据表定义的文件
      logging: true, //日志
      synchronize: true, //文件和数据库同步
      autoLoadEntities: true, //自动创建数据表
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
    }),
    UserModule,
    OSSModule,
    AuthModule,
    StudentModule,
    OrganizationModule,
    CourseModule,
    CardModule,
    ProductModule,
    TeacherModule,
    WxpayModule,
    OrderModule,
    WxorderModule,
    CardModule,
    ScheduleModule,
    ScheduleRecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
