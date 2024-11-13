import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cars')
export class CategoriesEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  category_id: number;
}
