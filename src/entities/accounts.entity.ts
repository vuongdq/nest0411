import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('accounts')
export class CategoriesEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  permission: string;
}
