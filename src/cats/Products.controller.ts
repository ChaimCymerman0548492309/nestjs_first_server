

import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ProductsService } from './Products.service';

@Controller('Products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
  @Post()
 async addProduct(
@Body('title') title: string, 
@Body('description') description: string, 
@Body('price') price: number, 
) {
  const newProduct = await this.productsService.insertProduct(
    title,
    description,
    price
  );
  console.log(newProduct);
  
  return 'added successfully'
}

@Get()
async getAllProducts() {
    const products = await this.productsService.getAllProducts(); ;
    return products;
}

@Get(':id')
async findOne(@Param('id') id: string) {
    const product = await this.productsService.getOneProduct(id); ;
    return product;
}

@Put(':id')
async updateProduct(@Param('id') id: string,
 @Body()
 { title, description, price }) {
  const updatedProduct = await this.productsService.updateProduct(
    id,
    title,
    description,
    price 
    );
  return updatedProduct;
}
@Delete(':id')
async deleteProduct(@Param('id') id: string) {
    const deletedProduct = await this.productsService.deleteProduct(id); ;
    return deletedProduct;
}
}
//   async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    // Handle the logic related to creating a new cat here
    // For example, save the cat to a database

    // res.status(HttpStatus.CREATED).send('This action adds a new cat');
  

//   @Get()
//   findAll(@Query() query: ListAllEntities, @Res() res: Response) {
//     // Handle the logic related to finding all cats here
//     // For example, retrieve cats from a database

//     res.status(HttpStatus.OK).json([]).send('This action returns all cats');
//   }



//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }


