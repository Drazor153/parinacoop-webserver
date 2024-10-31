import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './interfaces/environmentVariables';
import { DatabaseModule } from './database/database.module';
import { LocationModule } from './location/location.module';
import { CommonModule } from './common/common.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvironmentVariables>) => ({
        host: configService.get('POSTGRES_HOST'),
        database: configService.get('POSTGRES_DB'),
        port: configService.get('POSTGRES_PORT'),
        user: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
      }),
    }),
    UsersModule,
    LocationModule,
    CommonModule,
  ],
})
export class AppModule {}
