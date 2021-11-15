'use strict';

// class LinkedList {

// }

// module.exports = LinkedList;

const LinkedList=require('./lib/linked-list')
const Stack=require('./stack&queue/stack/stack');
const Queue=require('./stack&queue/queue/queue');
// const pseudoQueue=require('./stack&queue/pseudoQueue/pseudoqueue');
// const S1=new Stack();
// const Q1=new Queue();
// const L1=new LinkedList();
// const p1=new pseudoQueue();
const AnimalShelter=require('./stack&queue/stack-queue-animal/AnimalShelter ');
const q1= new AnimalShelter();

q1.enqueue('cat');
q1.enqueue('dog');
q1.enqueue('d');
//q1.enqueue('cat');
q1.enqueue('dog');
q1.enqueue('dcat');
q1.dequeue('cat');
console.log(q1);

// L1.append(1);
// L1.append(3);
// L1.append(2);
// L1.insertBefore(2,8);
// L1.insertAfter(3,8);


// console.log('p1',p1);
// p1.enqueue(5);
// p1.enqueue(15);
// p1.enqueue(20);
// p1.enqueue(25);
// p1.enqueue(30);
// console.log('p1',p1);
// p1.dequeue();
// p1.dequeue();
// console.log('p1',p1);

//  L1.insertAfter(8,12);
//  L1.insertAfter(2,1);
// L1.include(5);
// L1.include(3);
// L1.include(1);
// console.log(L1.toString());

// L1.kthFromEnd(1);
// L1.kthFromEnd(3);
// L1.kthFromEnd(0);


// const marge=new LinkedList();
// const L2=new LinkedList();
// const L3=new LinkedList();


// L2.append(1);
// L2.append(3);
// L2.append(5);

// L3.append(2);
// L3.append(4);
// L3.append(6);

// marge.linkedListzip(L2,L3);
// // console.log(L2.length);
// // console.log(L3.length);
// S1.isEmpty()
// S1.push(1);
// S1.push(2);
// S1.push(8);
// S1.push(10);
// S1.push(11);
// S1.peek();

