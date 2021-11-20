'use strict';
 const BST= require('../binarySearchtree');
 const Node=require('../node');
 const BT=require('../tree');
 describe('Binary Search Tree',()=>{

    it('Contains method',()=>{
        const one=new Node(1);
        const tow=new Node(2);
        const three=new Node(3);
     

        let tree= new BST(one);
        one.left=tow;
        one.right=three;

        expect(tree.Contains(1)).toBeTruthy();
        expect(tree.Contains(5)).toBeFalsy();

    })

    it('Add method',()=>{
        
     

        let tree= new BST();
        tree.Add(5);
        tree.Add(3);
        tree.Add(10)
        

        expect(tree.root.value).toEqual(5);
        expect(tree.root.left.value).toEqual(3);
        expect(tree.root.right.value).toEqual(10);


    })
 })