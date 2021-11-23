'use strict';

const Node=require('./node');
const kTree=require('./K-tree');

const FizzBuzz=require('./FizzBuzz');
let KT=new kTree();

KT.root=new Node(1,[new Node(5),new Node(15),new Node(6)]);


console.log(KT);


console.log(FizzBuzz(KT));

