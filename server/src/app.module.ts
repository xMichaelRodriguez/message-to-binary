import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      expandVariables: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://michael:xyYXwzYkQi2EB4x@cluster0.m4els.mongodb.net/messageBinaries?retryWrites=true&w=majority`,
    ),
    MessagesModule,
  ],
})
export class AppModule {}
