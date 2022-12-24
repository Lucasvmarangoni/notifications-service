import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationsBody {
  @IsNotEmpty() // Validação. 0 recipente não pode estar vazio
  @IsUUID()
  recipientId!: string;

  @Length(5, 255) // Validação 2 content deve ter entre 5 e 255 caracteres
  @IsNotEmpty()
  content!: string;

  @IsNotEmpty()
  category!: string;
}
