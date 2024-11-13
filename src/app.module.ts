import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { ProductController } from './modules/products/product.controller';
import { ProductService } from './modules/products/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs-api-v1',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
