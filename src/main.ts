import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  console.log("hola mundo");
  await app.listen(3000);
}
main();
