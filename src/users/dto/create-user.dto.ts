import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: false })
  Id: string;

  @ApiProperty()
  Email: string;

  @ApiProperty()
  FirstName: string;

  @ApiProperty()
  LastName: string;

  @ApiProperty({ required: false })
  PasswordHash: string;

  @ApiProperty({ required: false })
  PhoneNumber: string;

  @ApiProperty()
  UserName: string;
}
