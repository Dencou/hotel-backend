import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackDto } from './feedbackDto/feedback.dto';

@Injectable()
export class FeedbackService {

    constructor(private prismaService:PrismaService){}



    async createFeedback(dto:FeedbackDto){
        
        const feedback = await this.prismaService.feedback.create({
            data:{
                message:dto.message,
                rating:dto.rating,
                hotelId:dto.hotelId,
                userId:dto.userId
            },
        })
        return feedback;
    }


    

    
    async getFeedbacks(hotelid){
        const feedback = await this.prismaService.feedback.findMany({
            where:{
                hotelId: hotelid,
            }
        })
        
        return feedback;


    }


    



}
