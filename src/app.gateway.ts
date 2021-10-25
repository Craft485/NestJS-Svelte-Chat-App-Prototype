import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
// Imported typings
import { Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('AppGateway');

  afterInit() {
    this.logger.log('Inittialized!');
  }

  handleConnection(socket: Socket) {
    this.logger.log(`Client connected: ${socket.id}`);
    socket.join('room1');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(
    client: Socket,
    text: string,
  ): WsResponse<string | unknown> | void {
    const m = `<div class="msg">${text}</div><br/>`;
    // Using the 'to' method here means that the client that sent the message will be excluded from the server emitted event, whereas the 'in' method will send it to absolutly everyone in the room
    client.in('room1').emit('msgFromServer', m);
    return;
  }
}
