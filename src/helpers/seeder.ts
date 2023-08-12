import { seeder } from 'nestjs-seeder';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LiveEvent } from '../entities';
import { LiveEventSeeder } from '../live-event/live-event.seeder';

seeder({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [LiveEvent],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([LiveEvent]),
  ],
}).run([LiveEventSeeder]);
