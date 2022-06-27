import { IsDate, IsEnum, IsNumber } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

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
}
