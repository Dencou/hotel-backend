import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { HotelDto } from './hotelDto/hotel.dto';

@Injectable()
export class HotelService {

    constructor(private prismaService:PrismaService){}


    async getHotels(){
        const hotels = await this.prismaService.hotel.findMany({});
        return hotels;
    }

    async createService(dto:HotelDto){
        try{
            const hotel = await this.prismaService.hotel.create({
                data:{
                    name:dto.name,
                    pricePerNight:dto.pricePerNight,
                    extras:dto.extras,
                    roomPhoto:dto.roomPhoto,
                    country:dto.country,
                    city:dto.city,
                }
            })
            return hotel;
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == "P2002") throw new ForbiddenException('this hotel already exists')
                
            }
            throw error;
        }
        
    }




}
