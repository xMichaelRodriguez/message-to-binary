import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Messages, MessageSchema } from './schemas/messagesSchemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Messages.name, schema: MessageSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class MessagesModule {}
