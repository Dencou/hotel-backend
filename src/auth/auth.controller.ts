import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './authDto';

@Controller('auth')
export class AuthController {

    @Post('signin')
    signin(@Body() signInDto: AuthDto){

        return signInDto.email;

    }

    @Post('signup')
    signup(@Body() signup:AuthDto){
        return signup;

    }

}


    
    


