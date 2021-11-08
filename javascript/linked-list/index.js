'use strict';

// class LinkedList {

// }

// module.exports = LinkedList;

const LinkedList=require('./lib/linked-list')

const L1=new LinkedList();

L1.append(5);
L1.append(3);
L1.insertBefore(3,8);
L1.append(2);
L1.insertAfter(3,10);
L1.include(5);
L1.include(3);
L1.include(1);
console.log(L1.toString());
console.log(L1);
