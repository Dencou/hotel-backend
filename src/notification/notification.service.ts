import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationDto } from './notificationDto/notification.dto';



@Injectable()
export class NotificationService {

    constructor(private prisma:PrismaService){}


    getNotifications(){
        return this.prisma.notification.findMany();
        

    }
    createNotifications(dto:NotificationDto){
        const notification = this.prisma.notification.create({
            data:{
                title:dto.title,
                time:dto.time,
                subtitle:dto.subtitle,
                photo:dto.photo,
            }
        })
        return notification;
    }


}
