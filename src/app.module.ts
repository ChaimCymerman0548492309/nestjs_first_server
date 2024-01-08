import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  ProductsModule } from './cats/Products.module';
import { LoggerMiddleware } from './common/logger.middleware';
// import { CatsController } from './cats/cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ProductsModule , MongooseModule.forRoot('mongodb+srv://a548492309:8114@cluster0.zdjwrf5.mongodb.net/nestJs-test')],
  controllers: [AppController],
  providers: [AppService ],
  
  
})


// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .exclude(
//         { path: 'cats', method: RequestMethod.GET },
//         { path: 'cats', method: RequestMethod.POST },
//         'cats/(.*)',
//       )
      // .forRoutes('cats');
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
      // .forRoutes(CatsController);
      // consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);


//     }
// }

export class AppModule {}


