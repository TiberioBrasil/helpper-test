import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUsersArgs } from './dto/find-users.args';
import UpdateUserDto from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async findOne(id: string): Promise<User> {
    const user = await this.userRepo.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async find({ skip, take, ...where }: FindUsersArgs): Promise<User[]> {
    return this.userRepo.find({ skip, take, where });
  }

  async create(userData: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }

  async update(id: string, userData: UpdateUserDto): Promise<User> {
    const user: User = await this.userRepo.findOne(id);

    if (!user) {
      throw new NotFoundException(`No user with id: ${id} was found.`);
    }

    if (userData.password) {
      Object.assign(user, {
        ...userData,
        password: await this.hashPassword(userData.password, user.salt),
      });
    } else {
      Object.assign(user, {
        ...userData,
      });
    }

    return this.userRepo.save(user);
  }

  async destroy(id: string): Promise<number> {
    const result = await this.userRepo.delete(id);
    return result.affected;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
