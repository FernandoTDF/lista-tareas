import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //configurar CORS
  app.enableCors({
    origin:['http://localhost:3000','https://lista-tarea-64683.web.app'],
    methods:'GET,PUT,POST,DELETE,PATH',
    credentials: true
  })

  await app.listen(3001);
}
bootstrap();
