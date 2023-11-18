import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './modules/user/models/user.entity';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '超级',
      desc: '管理员',
      tel: '123213',
      password: '123',
      account: 'admin',
    });
  }

  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('5f6938f6-f480-45f7-8fc8-126681a01e99');
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      '23506840-a3db-4efc-bfca-d3e401d84db1',
      {
        name: '超级111',
        desc: '管理员',
        tel: '123213',
        password: '123',
        account: 'admin',
      },
    );
  }

  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.find('23506840-a3db-4efc-bfca-d3e401d84db1');
  }
}
