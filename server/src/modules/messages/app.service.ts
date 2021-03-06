import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dtos/CreateMessage.dto';
import { MessageToBinaryDto } from './dtos/MessageToBinary.dto';
import { MessageDocument, Messages } from './schemas/messagesSchemas';
import { v4 as uuid } from 'uuid';
@Injectable()
export class AppService {
  constructor(
    @InjectModel(Messages.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {}

  async createMessage(
    createMesssageDto: CreateMessageDto,
  ): Promise<MessageToBinaryDto> {
    const uuidGenerated = uuid();

    const messageCreated = await this.messageModel.create({
      message: createMesssageDto.message,
      state: true,
      pass: uuidGenerated,
    });

    try {
      const messageSaved: MessageToBinaryDto = await messageCreated.save();
      return messageSaved;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  async getMessage(uid: string): Promise<MessageToBinaryDto> {
    try {
      const message: MessageToBinaryDto = await this.messageModel.findById(uid);
      if (!message) {
        throw new NotFoundException('the message has already been discovered ');
      }

      return message;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findByPass(pass: string): Promise<any> {
    let resp;
    try {
      resp = await this.messageModel.find({
        pass: pass,
      });
    } catch (e) {
      throw new BadRequestException('not found message');
    }
    console.log(resp);

    if (Object.entries(resp).length === 0) {
      throw new BadRequestException('Invalid pass to decypher message');
    }
    const message = resp.pop();

    if (!message.state) {
      console.log('bad request');
      throw new BadRequestException('the message has already been discovered');
    }

    return message;
  }

  async updateStateMessage(uid: string): Promise<void> {
    try {
      await this.messageModel.findByIdAndUpdate(uid, { state: false });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
