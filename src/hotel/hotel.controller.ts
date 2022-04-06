import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelDto } from './hotelDto/hotel.dto';


@Controller('hotel')
export class HotelController {

    constructor(private hotelService:HotelService){}

    @Get("hotels")
    getHotels(){
        return this.hotelService.getHotels();
    }

    @Get(":tosearch")
    searchHotels(@Param("tosearch") tosearch:string){
        return this.hotelService.searchHotels(tosearch);
    }



    @Post()
    createHotels(@Body() dto:HotelDto){
        return this.hotelService.createService(dto);
    }





}
