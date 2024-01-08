import { Module } from '@nestjs/common';
import { ProductsService } from './Products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchma } from './products.model';
import { ProductsController } from './Products.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Products', schema: ProductSchma }])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
