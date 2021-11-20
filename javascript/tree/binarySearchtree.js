'use strict';

const node=require('./node');
const BinaryTree=require('./tree');

class binarySearchtree extends BinaryTree{

    constructor(root)
    {
        super(root)
    }


    
   // add new node 

   Add(value)
   {
       //create new node
       const newnode=new node(value)
      // check if the root is null
      if(!this.root)
      {
          this.root=newnode;
          console.log(this.root.value);
          return;

      }
      let current=this.root;
      while(true){
        if(current.value===value) return undefined;  
        if(current.value>value)
        {
            if(!current.left)
            {
              current.left=newnode;
              console.log(current.left.value);
              return;
            }
            current=current.left;
        }
  
       else if(current.value<value)
        {
            if(!current.right)
            {
              current.right=newnode;
              console.log(current.right.value);
              return;

            }
            current=current.right;
        }
      }
      

   }

   Contains(value)
   {
    let current=this.root;
       var found=false;
       //check if root is null
       if(this.root===null)
       {
           return false;
       }
     
       else{
           while (!found && current) {
            if(value<current.value)  current=current.left;   
            if(value > current.value) current=current.right;
            else found=true;
           
           }}
       console.log(found);
       return found ;
   }

   


   
}
module.exports=binarySearchtree;