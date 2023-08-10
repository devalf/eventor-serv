import { LiveEvent } from './live-event.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LiveEventCreate extends LiveEvent {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  dateTime: string;

  @ApiProperty()
  @IsString()
  location: string;
}
