import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param() params) {
    const result = await this.usersService.find(params.id);
    return result.content;
  }

  @Post()
  async create(@Body() data: any) {
    return await this.usersService.create(data);
  }
}
