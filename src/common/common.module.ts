import { Global, Module } from '@nestjs/common';
import { LocationService } from './providers';

@Global()
@Module({
  providers: [LocationService],
  exports: [LocationService],
})
export class CommonModule {}
