import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HotelModule } from './hotel/hotel.module';
import { FeedbackModule } from './feedback/feedback.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotificationModule } from './notification/notification.module';
import { SavedHotelsController } from './saved-hotels/saved-hotels.controller';
import { SavedHotelsService } from './saved-hotels/saved-hotels.service';



@Module({
  imports: [
    AuthModule, 
    UserModule, 
    HotelModule, 
    FeedbackModule,
    PrismaModule, 
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }), NotificationModule
    ],
  controllers: [SavedHotelsController],
  providers: [SavedHotelsService],
})
export class AppModule {}
