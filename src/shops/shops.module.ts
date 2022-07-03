import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { ShopRate } from './entities/shop-rate.entity';
import { ShopController } from './shops.controller';
import { ShopService } from './shops.service';
import { ShopLike } from './entities/shop-like.entity';
import { ShopCategory } from './entities/shop-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop, ShopRate, ShopLike, ShopCategory])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
