import { IsNotEmpty } from "class-validator";

export class NotificationDto{
    @IsNotEmpty()
    title:string;
    @IsNotEmpty()
    subtitle:string;
    @IsNotEmpty()
    time:string;
    @IsNotEmpty()
    photo:string;


}