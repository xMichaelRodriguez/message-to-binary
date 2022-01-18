import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageDto } from './dtos/CreateMessage.dto';
import { MessageToBinaryDto } from './dtos/MessageToBinary.dto';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  createMessage(
    @Body() createMesssageDto: CreateMessageDto,
  ): Promise<MessageToBinaryDto> {
    return this.appService.createMessage(createMesssageDto);
  }

  @Get('/url/:uid')
  GetReverseMessage(@Param('uid') uid: string): Promise<MessageToBinaryDto> {
    return this.appService.getMessage(uid);
  }
  @Get('/:pass')
  verifyPass(@Param('pass') pass: string): Promise<void> {
    return this.appService.findByPass(pass);
  }

  @Patch('/:uid')
  updateMessage(@Param('uid') uid: string) {
    return this.appService.updateStateMessage(uid);
  }
}
