import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Factory } from 'nestjs-seeder';

@Entity()
export class LiveEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({
    length: 100,
  })
  @IsString()
  @Factory((faker) => faker.lorem.word())
  title: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  @Factory((faker) => faker.lorem.paragraph())
  description: string;

  @ApiProperty()
  @Column({
    type: 'text',
  })
  @IsDateString()
  @Factory((faker) => faker.date.anytime().toISOString())
  dateTime: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  @Factory((faker) => faker.location.streetAddress())
  location: string;

  @CreateDateColumn({
    name: 'created_at',
    select: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    select: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    select: false,
  })
  deletedAt: Date;
}
