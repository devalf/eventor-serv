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

@Entity()
export class LiveEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({
    length: 100,
  })
  @IsString()
  title: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  description: string;

  @ApiProperty()
  @Column({
    type: 'text',
  })
  @IsDateString()
  dateTime: string;

  @ApiProperty()
  @Column('text')
  @IsString()
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
