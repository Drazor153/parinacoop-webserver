import { Controller } from '@nestjs/common';
import { CommunesService } from './communes.service';

@Controller('communes')
export class CommunesController {
  constructor(private readonly communesService: CommunesService) {}
}
