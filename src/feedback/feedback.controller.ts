import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackDto } from './feedbackDto/feedback.dto';

@Controller('feedback')
export class FeedbackController {

    constructor(private feedbackService:FeedbackService){

    }

    @Post('feedback')
    newFeedback(@Body() dto:FeedbackDto){
        return this.feedbackService.createFeedback(dto);
    }



    @Get(':hotelid')
    getFeedbacks(@Param('hotelid', ParseIntPipe) hotelid:number ){
        return this.feedbackService.getFeedbacks(hotelid);
    }



    
    



}
