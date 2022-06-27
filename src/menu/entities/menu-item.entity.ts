import { Shop } from 'src/shop/entities/shop.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne((type) => Shop, { nullable: false, onDelete: 'CASCADE' })
  shop: Shop;

  @Column()
  title: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column({ type: 'text' })
  info: string;
}
