import { Controller, Get, Logger, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(['/home', '/'])
  @Render('Home')
  getIndex() {
    Logger.log('GET request received for /home or /', 'AppController');
    return { titleCard: 'Hello World' };
  }

  @Get('/chat')
  @Render('Chat')
  getChat() {
    Logger.log('GET request received for /chat', 'AppController');
    return;
  }
}
