import { User } from 'src/auth/entities/user.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Shop } from './shop.entity';

@Entity()
export class ShopLike {
  @ManyToOne(() => Shop)
  shop: Shop;

  @ManyToOne(() => User)
  user: User;
}
