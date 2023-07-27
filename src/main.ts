import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Logger } from '@nestjs/common';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const logger = new Logger('NestApplication');
async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  app.use(helmet());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Demo service api')
    .setDescription('Develop by haha')
    .setVersion('1.0')
    .setContact(
      'haha',
      'https://www.facebook.com/honghanjr/',
      'honghaka45@gmail.com',
    )
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const SERVER_PORT = 3000;
  await app.listen(SERVER_PORT, () => {
    logger.log(
      `=========== 🕵  Server️ running on http://localhost:${SERVER_PORT} ===========‍`,
    );
  });
}
bootstrap();
