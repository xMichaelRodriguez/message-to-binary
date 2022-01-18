import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class MessageToBinaryDto {
  @IsString()
  message: string[];

  @IsString()
  _id: string;

  @IsBoolean()
  state: boolean;

  @IsUUID('4')
  pass: string;
}
