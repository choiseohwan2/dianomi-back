import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { DeliveryModule } from './delivery/delivery.module';
import { OrdersModule } from './orders/orders.module';
import { CommonModule } from './common/common.module';
import { MenuModule } from './menu/menu.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: process.env.DATABASE_PORT,
      username: 'lxx',
      password: 'lxxonx',
      database: 'dianomi',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ShopModule,
    AuthModule,
    DeliveryModule,
    OrdersModule,
    CommonModule,
    MenuModule,
  ],
})
export class AppModule {}
