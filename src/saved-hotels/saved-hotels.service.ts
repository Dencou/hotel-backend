import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SavedHotelDto } from './savedHotelDto/hotel-dto';

@Injectable()
export class SavedHotelsService {

    constructor(private prismaService:PrismaService){

    }

    async getSavedHotels(userId){
        const hotels = await this.prismaService.saveHotel.findMany(
            {
                where:{
                    userId:userId
                }
            }
                
        )
        return hotels;


    }

    async saveHotel(dto: SavedHotelDto){
        console.log(dto);
        //TODO: whitelist
        const hotel = await this.prismaService.saveHotel.create({
            data:{
                name: dto.name,
                pricePerNight:dto.pricePerNight,
                extras:dto.extras,
                country:dto.country,
                city:dto.city,
                roomPhoto:dto.roomPhoto,
                userId:dto.userId

            }
            
        })
        return hotel;


    }

    async deleteHotelById(id){
        const deleteHotel = await this.prismaService.saveHotel.delete({
            where:{
                id:id,
            }
        })
        return deleteHotel;


    }

    async deleteAllSavedHotels(){
        const deleteAllHotels = await this.prismaService.saveHotel.deleteMany({})
        return deleteAllHotels;
    }






}
