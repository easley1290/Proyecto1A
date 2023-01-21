import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
//para validation pipe es necesario utilizar el class-validator class-transformer
//nivel clase -> @UsePipes(ValidationPipe)
export class CarsController {
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }
    //los pipes pueden recibir argumentos generando una instancia
    //en vez de inyectarlos, y enviar el argumento 
    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.findOneById(id);
    }
    //dto forma que tendra la data enviada por el cliente
    //para evitar modificar el request
    @Post()
    // nivel metodo -> @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCarDto: UpdateCarDto){
        console.log("del metodo   "+ id)
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.delete(id);
    }
}