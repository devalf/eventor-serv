import { UpdateResult } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateResultApiModel implements UpdateResult {
  @ApiProperty()
  raw: any;

  @ApiProperty({
    description: 'Number of affected rows',
    type: Number,
  })
  affected?: number;

  @ApiProperty({
    description: 'Generated values returned by a database',
    type: [Object],
  })
  generatedMaps: any[];
}
