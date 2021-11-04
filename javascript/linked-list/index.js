'use strict';

// class LinkedList {

// }

// module.exports = LinkedList;

const LinkedList=require('./lib/linked-list')

const L1=new LinkedList();

L1.insert(5);
L1.insert(3);
L1.insert(2);
L1.include(5);
L1.include(3);
L1.include(1);
L1.toString();

console.log(L1);
