'use strict';

const Node=require('../node');

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.length=0;
    }

enqueue(value){
    const newnode=new Node(value);
    if(this.isEmpty())
    { 
        this.front=newnode;
        this.rear=newnode;
        this.length+=1;
    }
    else{
     this.rear.next=newnode;
     this.rear=newnode;
     this.length+=1;
     return this.front;

    }


}

dequeue()
{
    if(this.isEmpty)
    {
        console.log('The queue empty');
        return false;
    }
    const temp=this.front;
    this.front=this.front.next;
    temp.next=null;
    return temp.value;


}

peek(){
    if(this.isEmpty())
    {
        return true;
    }
    console.log(` this is the last node in queue${this.front.value}`);
    return this.front.value;
}

isEmpty(){
    return this.length==0;
}
}
module.exports=Queue