import { Controller } from '@nestjs/common';
import { ShopService } from './shops.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shop: ShopService) {}
}
