import { Module } from '@nestjs/common';
import { LiveEventModule } from './live-event/live-event.module';

@Module({
  imports: [LiveEventModule],
})
export class AppModule {}
