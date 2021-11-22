'use strict';

const BT=require('../tree');
const Node= require('../node');
const breadthFirst=require('../bredthFirst');
describe('test Binary Tree',()=>{
    
    it('instantiate an empty tree',()=>{
        const tree= new BT(null);
        expect(tree.root).toEqual(null);
    })

    // Can successfully instantiate a tree with a single root node
    it('instantiate a tree with a single root node',()=>{
        const tree= new BT(1);
        expect(tree.root).toEqual(1);
    }) 

    // Can successfully add a left child and right child to a single root node
    it('add a left child and right child ',()=>{
        const one=new Node(1);
        const tow=new Node(2);
        const three=new Node(3);
        let tree= new BT(one);
        one.left=tow;
        one.right=three;
      
    
        expect(tree.root.left.value).toEqual(2);

         expect(tree.root.right.value).toEqual(3);

    }) 

    // Can successfully return a collection from a preorder traversal
    it('preorder traversal',()=>{
        const one=new Node(1);
        const tow=new Node(2);
        const three=new Node(3);
     

        let tree= new BT(one);
        one.left=tow;
        one.right=three;
        const preorder=[1,2,3]
        expect(tree.preOrder()).toEqual(preorder);
    })
    // Can successfully return a collection from an inorder traversal
    it('preorder traversal',()=>{
        const one=new Node(1);
        const tow=new Node(2);
        const three=new Node(3);
     

        let tree= new BT(one);
        one.left=tow;
        one.right=three;
        const postorder=[2,3,1]
        expect(tree.postOrder()).toEqual(postorder);
    })
   // Can successfully return a collection from a postorder traversal
   it('preorder traversal',()=>{
    const one=new Node(1);
    const tow=new Node(2);
    const three=new Node(3);
 

    let tree= new BT(one);
    one.left=tow;
    one.right=three;
    const inorder=[2,1,3]
    expect(tree.inOrder()).toEqual(inorder);
})

it('Find the max value ',()=>{
    const one=new Node(1);
    const tow=new Node(2);
    const three=new Node(3);
    let tree= new BT(one);
    one.left=tow;
    one.right=three;
  

    expect(tree.Max()).toEqual(3);

})

it('Find the max value of empty tree ',()=>{
 
    let tree= new BT(null);

    expect(tree.Max()).toBeFalsy();

})


it('breadth search First traversal',()=>{
    const one=new Node(1);
    const tow=new Node(2);
    const three=new Node(3);
    const four=new Node(4);
    const five=new Node(5);
    const six=new Node(6);
    const seven=new Node(7);

    let tree= new BT(one);
    one.left=tow;
    one.right=three;
    tow.left=four;
    tow.right=five;
    three.left=six;
    three.right=seven;
    const result=[1,2,3,4,5,6,7]
    expect(breadthFirst(tree)).toEqual(result);
})
})