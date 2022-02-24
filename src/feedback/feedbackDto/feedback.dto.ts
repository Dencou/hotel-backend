import { IsNotEmpty } from "class-validator";

export class FeedbackDto{


    @IsNotEmpty()
    rating: number;
    @IsNotEmpty()
    message:string;
    @IsNotEmpty()
    userId: number;
    @IsNotEmpty()
    hotelId: number;

}