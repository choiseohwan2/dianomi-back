import { IsEmail, IsNotEmpty } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { UserRole } from '../entities/user.entity';

export class CreateUserInput {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly type: UserRole;

  @IsNotEmpty()
  readonly password: string;
}

export class CreateUserOutput extends CoreOutput {}
