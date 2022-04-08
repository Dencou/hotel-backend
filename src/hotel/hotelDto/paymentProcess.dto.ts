import { IsNotEmpty, IsNumber } from "class-validator";

export class ProcessPaymentModel{

    @IsNotEmpty()
    @IsNumber()
    days: number;
    @IsNotEmpty()
    @IsNumber()
    price: number;
    @IsNotEmpty()
    date: string;

}