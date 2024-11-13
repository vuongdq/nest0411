import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;
}
