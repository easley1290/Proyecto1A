import { Controller , Get} from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    public mostrarMensaje(){
        console.log("holaMundo");
        return "Hola Mundo";
    }
}