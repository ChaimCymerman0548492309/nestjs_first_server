
import { HttpException, HttpStatus, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model'



@Injectable()
export class ProductsService {
  private readonly Products: Product[] = [];

  constructor(@InjectModel('Products') private productModel: Model<Product>) { }

  async insertProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description,
      price
    });
    const res = await newProduct.save();
    return res;
  }

  async getAllProducts() {
    const products = await this.productModel.find().exec();;
    return products.map((product => ({
      id: product._id,
      title: product.title,
      description: product.description,
      price: product.price
    })))
  }
  async getOneProduct(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND, product);
    }
    return {id : product._id, title : product.title, description : product.description, price : product.price}
    
  };

  async updateProduct(id :string ,title: string, description: string, price: number) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND, product);
    }
    if (title) product.title = title;
    if (description) product.description = description;
    if (price) product.price = price;
    product.save();
    return {
      id: product._id,
      title: product.title,
      description: product.description,
      price: product.price
    }
  }
async deleteProduct(id: string) {
  const product = await this.productModel.findByIdAndDelete(id).exec();
  if (!product) {
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  } else {
    await this.productModel.deleteOne(product);
  }
  return 'delete product'
    
  
}
}




  // async findOne(
  //   @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  //   id: number,
  // ) {
  //   return this.findOne(id);
  // }


