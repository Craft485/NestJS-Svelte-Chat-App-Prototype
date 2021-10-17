import 'svelte/register';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { svelteViewEngine } from './svelte-view-engine';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.engine('svelte', svelteViewEngine);
  app.setViewEngine('svelte');
  await app.listen(3000);
  Logger.log(`Server listening: ${await app.getUrl()}`, 'MainInstance');
}
bootstrap();
