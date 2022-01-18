import { IsArray, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsArray()
  // "each" tells class-validator to run the validation on each item of the array
  @IsString({ each: true })
  message: string[];
}
