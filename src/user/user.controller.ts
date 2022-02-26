import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';


@UseGuards(JwtGuard)
@Controller('users')
export class UserController {

    constructor(private prisma: PrismaService, private userService:UserService){}
    
    
    @Get('me')
    getMe(@GetUser() user:User){        
        return user;
    }

    @Get('users')
    getUsers(){
        return this.userService.getUsers()
    }

}
