import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BigIntToNumberInterceptor } from './common/interceptors/bigint.interceptor';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // 全局拦截器替代 express app.use，没有类型警告
  app.useGlobalInterceptors(
    new BigIntToNumberInterceptor(),
    new ResponseInterceptor(),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  // swagger
  const config = new DocumentBuilder()
    .setTitle('自习室后端API')
    .setDescription('Store门店管理接口文档')
    .setVersion('1.0')
    .addTag('门店管理')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors();
  const port = Number(process.env.PORT) || 80;
  await app.listen(port, '0.0.0.0');
  console.log(`服务启动 http://0.0.0.0:${port}`);
  console.log(`Swagger：http://0.0.0.0:${port}/api-docs`);
}
bootstrap();
