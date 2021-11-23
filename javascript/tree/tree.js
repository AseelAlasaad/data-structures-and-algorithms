'use strict';

const node=require('./node');

class BinaryTree{
    constructor(root=null)
    {
        this.root=root;

    }

   preOrder()
   {
       let arrayOfReadNode=[];

       const walk=(node)=>{
        arrayOfReadNode.push(node.value);

        if(node.left)
        {
            walk(node.left);
        }

        if(node.right)
        {
            walk(node.right);
        }
     }
     walk(this.root);

     return arrayOfReadNode;

   } 

   postOrder()
   {
       let arrayOfReadNode=[];

       const walk=(node)=>{

        if(node.left)
        {
            walk(node.left);
        }

        if(node.right)
        {
            walk(node.right);
        }

        arrayOfReadNode.push(node.value);

     }
     walk(this.root);

     return arrayOfReadNode;

   }

   
   inOrder()
   {
       let arrayOfReadNode=[];

       const walk=(node)=>{

        if(node.left)
        {
            walk(node.left);
        }

        arrayOfReadNode.push(node.value);

        if(node.right)
        {
            walk(node.right);
        }

      

     }

     walk(this.root);

     return arrayOfReadNode;

   }


   Max()
   { 
    if(this.root===null) return false;   
    
    let array=this.preOrder();
    let max= array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max)
        {
            max=array[i]
        }
        
    }
    console.log(max);
    return max;
     
   }


   FizzBuzz()
   { 
    if(this.root===null) return false;   
    
    let array=this.preOrder();
    let FizzBuzz=[];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 3==0)
        {
            FizzBuzz.push('Fizz');
        }
        else if(array[i] % 5==0)
        {
            FizzBuzz.push('Buzz');
           
        }
        else if(array[i] % 3==0 && array[i]%5==0)
        {
            FizzBuzz.push('FizzBuzz');
        }
        else{
            FizzBuzz.push(array[i]);
        }
    }
    console.log(FizzBuzz);
    return FizzBuzz;
     
   }




}


module.exports=BinaryTree;

