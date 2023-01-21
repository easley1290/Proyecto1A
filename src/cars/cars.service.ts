import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            marca: 'Toyota',
            modelo: 'Corolla'
        },
        {
            id: 2,
            marca: 'Honda',
            modelo: 'Civic'
        },
        {
            id: 3,
            marca: 'Jeep',
            modelo: 'Cherokee'
        }
    ]
    findAll(){
        return this.cars;
    }
    findOneById(id: number){
        var carro = this.cars.find( car => car.id === id);
        if (!carro) throw new NotFoundException(`Car with id '${ id }' not found`);
        return carro;
    }
}
