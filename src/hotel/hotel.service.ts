import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { join } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';
import { HotelDto } from './hotelDto/hotel.dto';
import { PaymentData } from './hotelDto/paymentData.dto';
import { ProcessPaymentModel } from './hotelDto/paymentProcess.dto';

@Injectable()
export class HotelService {

    constructor(private prismaService:PrismaService){}


    async getHotels(){
        const hotels = await this.prismaService.hotel.findMany({});
        return hotels;
    }

    async searchHotels(country){
        console.log(country);
        const search = await this.prismaService.hotel.findMany({
            where: {
                country:{
                    contains: country,
                }
            }
        })
        return search;
    }

    async processPayment(dto:ProcessPaymentModel):Promise<PaymentData>{
        const total = (dto.days * dto.price).toString();
        const date = dto.date;
        
        const totals:PaymentData = {
            total,
            date,   
        };
        console.log(totals);
        return totals;

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
