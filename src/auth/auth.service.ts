import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2'
import { AuthDto } from './authDto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './authDto/login.dto';

@Injectable()
export class AuthService {

    constructor(private prismaService:PrismaService, private jwt:JwtService, private config:ConfigService){
    }

    async signup(dto:AuthDto){
        //hash the password
        const hash = await argon.hash(dto.password);


        //save the user in the db
        try{
            const user = await this.prismaService.user.create({
                data:{
                    email: dto.email,
                    name:dto.name,
                    country:dto.country,
                    image:dto.image,
                    hash,
                    
                },
                
            })
         
            //return user
            return this.signToken(user.id,user.email);

        }catch(error){
            //if is a prisma error return
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == "P2002"){

                    throw new ForbiddenException (
                        'credentials taken'
                        );

                }  
            }
            throw error;
        }
        
    }
    async signin(dto:LoginDto){
        //Find the user by email
        //if user dont exists throw error
        
        const user = await this.prismaService.user.findFirst({
            where:{email:dto.email}
        })
        if (!user) throw new ForbiddenException('credentials incorrect')
        //compare passwords
        console.log(user.hash, dto.password)
        const pwMatches = await argon.verify(user.hash, dto.password)
        //if passwords incorrect throw error
        if(!pwMatches) throw new ForbiddenException('credentials incorrect');
    
        //send back the users

        return this.signToken(user.id,user.email);
    }

    async signToken(userId:number, email:string):Promise<{ access_token: string }>{

        const payload = {
            sub:userId,
            email
        }
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(
            payload,
            {
              expiresIn: '15m',
              secret: secret,
            },
          );

        return {
            access_token: token,
          };
    }


}
