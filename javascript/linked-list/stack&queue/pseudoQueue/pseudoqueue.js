'use strict';

const Stack=require('../stack/stack');


class pseudoQueue{
 
    constructor()
    {
       this.in=new Stack();
       
       this.out=new Stack();
    }

    enqueue(value){ 
       this.in.push(value);
      return this.in.peek();
    }

dequeue(){
   
if(this.out.peek()=='empty')
{

while(this.in.peek()!=='empty')
{
    this.out.push(this.in.pop());
  
}
}

//pop and return the element from stack 2
return this.out.pop();
}
}
module.exports=pseudoQueue;