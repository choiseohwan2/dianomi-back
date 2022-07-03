import { CoreEntity } from 'src/common/entities/core.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { ShopCategory } from './shop-category.entity';

@Entity()
export class Shop extends CoreEntity {
  @Column()
  businessId: number;

  @ManyToOne(() => ShopCategory)
  category: ShopCategory;

  @Column({ default: '' })
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column({ type: 'datetime' })
  openingTime: Date;

  @Column({ type: 'datetime' })
  closingTime: Date;
}
