import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from '@prisma/client';


@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    
    
    @Get('me')
    getMe(@GetUser() user:User){        
        return user;
    }
}
