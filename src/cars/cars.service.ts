import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]
    findAll(){
        return this.cars;
    }
    findOneById(id: string){
        var carro = this.cars.find( car => car.id === id);
        if (!carro) throw new NotFoundException(`Car with id '${ id }' not found`);
        return carro;
    }
    create(createCarDto: CreateCarDto){
        let newCar: Car = {
            id: uuid(),
            ...createCarDto
        };
        
        this.cars.push(newCar);
        return newCar;
    }
    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException('Car id is not valid inside body');

        this.cars = this.cars.map( car => {
            if(car.id === id){
                carDB = { ...carDB, ...updateCarDto, id } 
                return carDB;
            }
            return car;
        })
        return carDB;
    }
    delete(id: string){
        let carDB = this.findOneById(id);
        // const index = this.cars.indexOf(carDB);
        // const carDeleted = this.cars.splice(index, 1);
        this.cars = this.cars.filter(car => car.id !== id);
        return carDB;
        
    }
}
