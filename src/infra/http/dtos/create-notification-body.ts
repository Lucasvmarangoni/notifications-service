import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationsBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId!: string;

  @Length(5, 255)
  @IsNotEmpty()
  content!: string;

  @IsNotEmpty()
  category!: string;
}
