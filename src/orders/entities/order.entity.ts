import { IsDate, IsEnum, IsNumber } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum OrderStatus {
  Pending = 'Pending',
  Cooking = 'Cooking',
  Cooked = 'Cooked',
  PickedUp = 'PickedUp',
  Delivered = 'Delivered',
}

@Entity()
export class Order extends CoreEntity {
  @Column()
  @IsNumber()
  deliverTip: number;

  @Column()
  @IsNumber()
  totalPrice: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.Pending })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @Column({ type: 'datetime' })
  @IsDate()
  estimateTime: Date;

  @Column({ type: 'datetime' })
  @IsDate()
  confirmedAt: Date;

  @Column({ type: 'datetime' })
  @IsDate()
  cookedAt: Date;

  @Column({ type: 'datetime' })
  @IsDate()
  deliveredAt: Date;

  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: 'SET NULL',
    nullable: true,
    eager: true,
  })
  customer?: User;

  @ManyToOne(() => User, (user) => user.delivers, {
    onDelete: 'SET NULL',
    nullable: true,
    eager: true,
  })
  delivery?: User;

  @ManyToOne(() => User, (user) => user.sells, {
    onDelete: 'SET NULL',
    nullable: true,
    eager: true,
  })
  business?: User;
}
