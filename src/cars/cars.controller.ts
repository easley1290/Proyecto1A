import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number){
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() req: any){
        return req;
    }

    @Patch(':id')
    updateCar(@Body() req: any, @Param('id') id: number){
        return req;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number){
        return {
            msg: 'delete',
            id: id
        };
    }
}