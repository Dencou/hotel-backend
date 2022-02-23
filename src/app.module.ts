import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HotelModule } from './hotel/hotel.module';
import { FeedbackModule } from './feedback/feedback.module';


@Module({
  imports: [AuthModule, UserModule, HotelModule, FeedbackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
