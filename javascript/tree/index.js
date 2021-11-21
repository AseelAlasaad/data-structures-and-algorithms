'use strict';

const Node=require('./node');
const BinaryTree=require('./tree');
const binarySearchtree=require('./binarySearchtree');

const BT= new BinaryTree();
const BST= new binarySearchtree();
BT.root=new Node(1,new Node(2,new Node(10), new Node(4)),new Node(5,new Node(6), new Node(7)));

console.log('preOrder:', BT.preOrder());

console.log('---------------------------');

console.log('postOrder:', BT.postOrder());

console.log('---------------------------');

console.log('inOrder:', BT.inOrder());

console.log('---------------------------');

BST.Add(8);
BST.Add(12);
BST.Add(4);
BST.Add(6);
BST.Add(3);
BST.Add(10); 
console.log('-------------After Add--------------');
console.log('add:', BST.inOrder());

BST.Contains(10);

console.log('-------------Max--------------');
console.log('Tree:', BT.preOrder());

BT.Max();



