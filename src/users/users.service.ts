import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { uuidv7 } from 'uuidv7';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    createUserDto.Id = uuidv7();
    return this.prisma.users.create({
      data: createUserDto,
    });
  }

  findAll() {
    // return `This action returns all users`;
    return this.prisma.users.findMany();
  }

  findOne(id: string) {
    // return `This action returns a #${id} user`;
    return this.prisma.users.findUnique({
      where: { Id: id },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    return this.prisma.users.update({
      where: { Id: id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    // return `This action removes a #${id} user`;
    return this.prisma.users.delete({
      where: { Id: id },
    });
  }
}
