import { Controller, Get, Logger, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/chat')
  @Render('Chat')
  getChat() {
    Logger.log('GET request received for /chat', 'AppController');
    return { message: 'Hello World!' };
  }
}
