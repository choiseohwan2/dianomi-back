import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  businessId: number;

  @Column()
  categoryId: string;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
