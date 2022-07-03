import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Shop } from './shop.entity';

@Entity()
export class ShopRate extends CoreEntity {
  @ManyToOne(() => Shop)
  shop: Shop;

  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'float' })
  rate: number;
}
