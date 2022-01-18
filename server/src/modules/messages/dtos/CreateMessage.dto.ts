import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsArray()
  // "each" tells class-validator to run the validation on each item of the array
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  message: string[];
}
