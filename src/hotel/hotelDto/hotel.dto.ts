import { IsNotEmpty, isNotEmpty } from "class-validator";

export class HotelDto{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    pricePerNight: string;

    @IsNotEmpty()
    extras: string;

    @IsNotEmpty()
    country: string;
    
    @IsNotEmpty()
    city: string;
    @IsNotEmpty()
    roomPhoto:string;
}