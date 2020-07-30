import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { User } from './user.entity';
import UpdateUserDto from './dto/update-user.dto';
import { FindUsersArgs } from './dto/find-users.args';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(@Query() args: FindUsersArgs): Promise<User[]> {
    try {
      const users = await this.usersService.find(args);

      return users;
    } catch (err) {
      throw Error(err);
    }
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<User> {
    try {
      const user = await this.usersService.findOne(id);
      return user;
    } catch (err) {
      throw Error(`User with id ${id} not found`);
    }
  }

  @Patch(':id')
  @HttpCode(204)
  async update(
    @Param('id') id: string,
    @Body() userData: UpdateUserDto
  ): Promise<void> {
    try {
      await this.usersService.update(id, userData);
    } catch (err) {
      throw Error(`User with id ${id} not found`);
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    await this.usersService.destroy(id);
  }
}
