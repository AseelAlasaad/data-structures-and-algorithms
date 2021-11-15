'use strict';

const AnimalShelter=require('../stack-queue-animal/AnimalShelter ');

describe('pseudo Queue',()=>{

    it(' cat  enqueue  ',()=>{
        const Animal= new AnimalShelter();
        Animal.enqueue('cat');
        Animal.enqueue('cat');
        Animal.enqueue('cat');
        expect(Animal.catQueue.front.value).toBe('cat');
    });
    it(' dog enqueue  ',()=>{
        const Animal= new AnimalShelter();
        Animal.enqueue('dog');
        Animal.enqueue('dog');
        Animal.enqueue('dog');
        expect(Animal.dogQueue.front.value).toBe('dog');
    });
    it(' dog dequeue  ',()=>{
        const Animal= new AnimalShelter();
        Animal.enqueue('dog');
        Animal.enqueue('dog');
        Animal.enqueue('dog');
        Animal.dequeue('dog');
        expect(Animal.dogQueue.front.value).toBe('dog');
        expect(Animal.dogQueue.rear.value).toBe('dog');

    });
    it('  dequeue Animal not dog or cat  ',()=>{
        const Animal= new AnimalShelter();
    
        expect(   Animal.dequeue('catdog')).toBe(null);
    });

    it('enqueue  Animal not dog or cat  ',()=>{
        const Animal= new AnimalShelter();

        expect( Animal.enqueue('monky')).toBe('not dog or cat');
    });




})