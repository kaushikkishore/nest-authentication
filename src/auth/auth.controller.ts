import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
    constructor(private _authService: AuthService){

    }

    @Post('/local/signup')
    signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
        this._authService.signupLocal(dto);
    }

    @Post('/local/signin')
    signinLocal() {
        this._authService.signinLocal();
    }

    @Post('/logout')
    logout() {
        this._authService.logout();
    }

    @Post('/refresh')
    refreshTokens() {
        this._authService.refreshTokens();
    }
}
