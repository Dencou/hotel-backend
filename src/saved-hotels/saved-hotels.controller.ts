import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete } from '@nestjs/common';
import { SavedHotelsService } from './saved-hotels.service';
import { SavedHotelDto } from './savedHotelDto/hotel-dto';

@Controller('savedhotels')
export class SavedHotelsController {
    constructor(private savedHotelService: SavedHotelsService){

    }

    @Get(":userId")
    getSavedHotels( @Param('userId',ParseIntPipe) userId:number ){
        console.log(userId)
        return this.savedHotelService.getSavedHotels(userId)

    }

    @Post('savehotel')
    saveHotel(@Body() dto:SavedHotelDto){
        return this.savedHotelService.saveHotel(dto)

    }
    @Delete(":hotelid")
    deleteHotelById(@Param('hotelid', ParseIntPipe) hotelid:number){
        return this.savedHotelService.deleteHotelById(hotelid)

    }
    @Delete()
    deleteAllSavedHotels(){
        return this.savedHotelService.deleteAllSavedHotels()

    }


}
