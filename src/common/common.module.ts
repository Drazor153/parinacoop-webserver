import { Global, Module } from '@nestjs/common';
import { LocationService, HashingService } from './providers';

@Global()
@Module({
  providers: [LocationService, HashingService],
  exports: [LocationService, HashingService],
})
export class CommonModule {}
