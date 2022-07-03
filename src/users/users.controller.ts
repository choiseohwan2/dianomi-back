import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserInput } from './dto/create-user.dto';
import { LoginUserInput } from './dto/login-user.dto';
import { UserRole } from './entities/user.entity';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/')
  getUsers(@Res() res: Response) {
    return res.json({
      ok: true,
    });
  }
  @Post('/')
  async createUser(@Body() body: CreateUserInput, @Res() res: Response) {
    const result = await this.userService.createUser(body);
    return res.json(result);
  }

  @Post('/login/:role')
  async loginUser(
    @Body() body: LoginUserInput,
    @Res() res: Response,
    @Param('role') role: UserRole,
  ) {
    const result = await this.userService.loginUser(body, role);
    return res.json(result);
  }
}
