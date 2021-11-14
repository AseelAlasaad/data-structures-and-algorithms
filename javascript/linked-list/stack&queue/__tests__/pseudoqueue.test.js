'use strict';

const pseudoQueue=require('../pseudoQueue/pseudoqueue');

describe('pseudo Queue',()=>{

    it(' single enqueue of stack ',()=>{
        const queue= new pseudoQueue();
        queue.enqueue(1);
   
        expect(queue.in.top.value).toEqual(1);
    })
    it(' multiple enqueue of stack ',()=>{
        const queue= new pseudoQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.in.top.value).toEqual(3);
    })

    
    it('single dequeue of stack ',()=>{
        const queue= new pseudoQueue();
     
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(3);
    })

    it('multiple dequeue of stack ',()=>{
        const queue= new pseudoQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(3);
    })


})