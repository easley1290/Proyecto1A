import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //solo deja entrar la data declarada en el dto y elimina
      whitelist: true,
      //lanza error si el argumento no existe
      forbidNonWhitelisted: true,

    }),
  )

  await app.listen(3000);
}
main();
