import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Shop } from './shop.entity';

@Entity()
export class ShopLike extends CoreEntity {
  @ManyToOne(() => Shop)
  shop: Shop;

  @ManyToOne(() => User)
  user: User;
}
