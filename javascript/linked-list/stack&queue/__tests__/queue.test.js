'use strict';


const Queue = require('../queue/queue');


describe('queue', () => {

it('works',()=>{
  expect(true).toBeTruthy();
});

it('add in queue',()=>{
    let newqueue=new Queue();
    newqueue.enqueue(1);
    newqueue.enqueue(2);
    newqueue.enqueue(3);
    expect(newqueue.front.value).toEqual(1);
    expect(newqueue.rear.value).toEqual(3);
 });
 it('dequeue ',()=>{
    let newqueue=new Queue();

    newqueue.dequeue();
    newqueue.dequeue();
    newqueue.dequeue();
    expect(newqueue.front).toEqual(null);
    expect(newqueue.rear).toEqual(null);
 });

// Can successfully peek into a queue, seeing the expected value
 it('peek ',()=>{
   let newqueue=new Queue();
   newqueue.enqueue(1);
   newqueue.enqueue(2);

   expect(newqueue.peek()).toEqual(1);
 
});

// Can successfully empty a queue after multiple dequeues

it('isEmpty queue',()=>{
   let newqueue=new Queue();
   newqueue.dequeue();
    newqueue.dequeue();
    newqueue.dequeue();
   expect(newqueue.isEmpty()).toBeTruthy();
});

// Can successfully instantiate an empty queue
it('instantiate an empty queue',()=>{
   let newqueue=new Queue();
   expect(newqueue.isEmpty()).toBeTruthy();

 
});

// Calling dequeue or peek on empty queue raises exception
it('instantiate an empty queue',()=>{
   let newqueue=new Queue();
   expect(newqueue.peek()).toBeTruthy();


});


});