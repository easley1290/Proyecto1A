import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({ message: 'The brand isnt exists' })
    readonly brand: string;
    
    @IsString()
    @MinLength(3)
    readonly model: string;
}