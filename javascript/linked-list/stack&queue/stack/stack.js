'use strict';

const Node=require('../node');

class Stack{
constructor(){
    this.top=null;
    this.length=0;
}
push(value){
 
    if(this.isEmpty)
    {
      const newnode= new Node(value);
      this.top=newnode;
      console.log('push new value');

      this.length+=1;
    }
    else{
        const newnode= new Node(value);
        newnode.next=this.top;
        this.top=newnode;
        console.log('push new value');
        this.length+=1;
        
    }


}


pop(){
    if(this.isEmpty())
    {
        return false;
    }
    else{
    const temp=this.top;
    this.top=this.top.next;
    temp.next=null;
    this.length+=1;
    return temp.value

    }


}

peek()
{
    if(this.isEmpty())
    {
        return "no Nodes in the stack";
    }
    console.log(this.top.value);
    return this.top.value;

}

isEmpty(){
    return this.top===null
}




}
module.exports=Stack;