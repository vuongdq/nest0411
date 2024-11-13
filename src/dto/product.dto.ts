import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'categoryId không được để trống' })
  categoryId?: number;
  @MinLength(5, { message: 'ProductName phải nhiều hơn 5 ký tự' })
  productName?: string;
  @IsNumber()
  price?: number;
}
