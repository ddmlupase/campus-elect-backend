import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3001

  const config = new DocumentBuilder()
    .setTitle('Campus Election Backend')
    .setDescription('API documentation for the Campus Election Application')
    .setVersion('1.0')
    .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(PORT);

  console.log(`RUNNIN ON PORT : http://localhost:${PORT}`)
}
void bootstrap();

