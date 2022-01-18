import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Messages & Document;

@Schema()
export class Messages {
  @Prop()
  message: string[];
  @Prop()
  pass: string;
  @Prop()
  state: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Messages);
