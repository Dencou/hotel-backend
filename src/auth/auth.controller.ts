import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './authDto';
import { LoginDto } from './authDto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('signin')
    signin(@Body() signInDto: LoginDto){
        return this.authService.signin(signInDto);

    }


    @HttpCode(200)
    @Post('signup')
    signup(@Body() signup:AuthDto){

        return this.authService.signup(signup) ;

    }

}


    
    


