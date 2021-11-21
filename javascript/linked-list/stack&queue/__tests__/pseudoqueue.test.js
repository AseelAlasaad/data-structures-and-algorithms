'use strict';

const pseudoQueue=require('../pseudoQueue/pseudoqueue');

describe('pseudo Queue',()=>{

    it(' single enqueue of stack ',()=>{
        const Pqueue= new pseudoQueue();
        Pqueue.enqueue(1);
   
        expect(Pqueue.in.top.value).toEqual(1);
    });
    it(' multiple enqueue of stack ',()=>{
        const Pqueue= new pseudoQueue();
        Pqueue.enqueue(1);
        Pqueue.enqueue(2);
        Pqueue.enqueue(3);
        expect(Pqueue.in.top.value).toEqual(3);
    });


})