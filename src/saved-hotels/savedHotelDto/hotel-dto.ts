import { IsNotEmpty, IsString } from "class-validator";

export class SavedHotelDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    pricePerNight: string;

    @IsNotEmpty()
    @IsString()
    extras: string;

    @IsNotEmpty()
    @IsString()
    country: string;
    
    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    roomPhoto:string;

    @IsNotEmpty()
    userId:number;


}