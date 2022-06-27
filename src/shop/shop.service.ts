import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private shop: Repository<Shop>,
  ) {}
  getAllShops(): string {
    return 'get all shops';
  }

  createShop(): boolean {
    const rest = this.shop.create({});
    console.log(rest);
    return true;
  }
}
