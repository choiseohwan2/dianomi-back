import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dto/create-user.dto';
import { LoginUserInput, LoginUserOutput } from './dto/login-user.dto';
import { User, UserRole } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser({
    email,
    password,
    name,
    type,
  }: CreateUserInput): Promise<CreateUserOutput> {
    try {
      const exists = await this.users.findOne({
        where: {
          email,
        },
        select: {
          id: true,
        },
      });
      if (exists) {
        return { ok: false, msg: 'There is a user with that email already' };
      }
      await this.users.save(this.users.create({ email, password, type, name }));
      return { ok: true };
    } catch (e) {
      console.log(e);
      return { ok: false, msg: "Couldn't create account" };
    }
  }

  async loginUser(
    { email, password }: LoginUserInput,
    role: UserRole,
  ): Promise<LoginUserOutput> {
    try {
      const user = await this.users.findOne({
        where: {
          email,
        },
        select: {
          id: true,
          password: true,
          type: true,
        },
      });
      if (!user) {
        return { ok: false, msg: 'User not found' };
      }
      if (user.type != role) {
        return { ok: false, msg: "User role doesn't match" };
      }
      const isPasswordValid = await user.checkPassword(password);
      if (!isPasswordValid) {
        return { ok: false, msg: 'Wrong password' };
      }
      const token = this.jwtService.sign(user.id);

      return { ok: true, token };
    } catch (e) {
      console.log(e);
      return { ok: false, msg: "Couldn't create account" };
    }
  }
}
