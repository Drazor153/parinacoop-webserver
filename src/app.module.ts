import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './interfaces/environmentVariables';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './contexts/auth/infrastructure/auth.module';
import { LocationModule } from './contexts/location/infrastructure/location.module';
import { HealthModule } from './health/health.module';
import { SharedModule } from './contexts/shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvironmentVariables>) => ({
        host: configService.get('POSTGRES_HOST')!,
        database: configService.get('POSTGRES_DB')!,
        port: configService.get('POSTGRES_PORT')!,
        user: configService.get('POSTGRES_USER')!,
        password: configService.get('POSTGRES_PASSWORD')!,
      }),
    }),
    HealthModule,
    AuthModule,
    LocationModule,
    // UsersModule,
    // CommonModule,
    SharedModule,
  ],
})
export class AppModule {}
