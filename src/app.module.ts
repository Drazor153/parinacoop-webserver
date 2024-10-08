import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { KyselyModule } from './kysely/kysely.module';

@Module({
  imports: [UsersModule, KyselyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
