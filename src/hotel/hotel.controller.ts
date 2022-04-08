import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelDto } from './hotelDto/hotel.dto';
import { ProcessPaymentModel } from './hotelDto/paymentProcess.dto';


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

    @Post('payment')
    processPayment(@Body() dto:ProcessPaymentModel){
        return this.hotelService.processPayment(dto);
    }



    @Post()
    createHotels(@Body() dto:HotelDto){
        return this.hotelService.createService(dto);
    }





}
