import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from './notificationDto/notification.dto';

@Controller('notification')
export class NotificationController {
    constructor(private notificationService:NotificationService){}

    @Get()
    getNotifications(){
        return this.notificationService.getNotifications();
    }

    @Post('notifications')
    createNotifications(@Body() dto:NotificationDto){
        return this.notificationService.createNotifications(dto);
    }





}
