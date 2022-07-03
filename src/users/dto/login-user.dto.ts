import { IsEmail, IsNotEmpty } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/output.dto';

export class LoginUserInput {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}

export class LoginUserOutput extends CoreOutput {
  token?: string;
}
