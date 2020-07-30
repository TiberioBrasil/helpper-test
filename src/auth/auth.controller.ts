import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authSignUpDto: AuthSignUpDto): Promise<void> {
    return this.authService.signUp(authSignUpDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authSignInDto: AuthSignInDto
  ): Promise<{ token: string }> {
    return this.authService.signIn(authSignInDto);
  }
}
