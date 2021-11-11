'use strict';

// class LinkedList {

// }

// module.exports = LinkedList;

const LinkedList=require('./lib/linked-list')

const L1=new LinkedList();

L1.append(1);
L1.append(3);
L1.append(2);
L1.insertBefore(2,8);
L1.insertAfter(3,8);
L1.insertAfter(8,12);
L1.include(5);
L1.include(3);
L1.include(1);
console.log(L1.toString());

L1.kthFromEnd(0);
L1.kthFromEnd(3);
L1.kthFromEnd(7);


const marge=new LinkedList();
const L2=new LinkedList();
const L3=new LinkedList();


L2.append(1);
L2.append(3);
L2.append(5);

L3.append(2);
L3.append(4);
L3.append(6);

marge.linkedListzip(L2,L3);
// console.log(L2.length);
// console.log(L3.length);

