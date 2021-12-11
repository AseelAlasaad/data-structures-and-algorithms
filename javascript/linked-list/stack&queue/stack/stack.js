'use strict';

const Node=require('../node');

class Stack{
constructor(){
    this.top=null;
    this.length=0;
   
}
push(value){
 
    
    if(this.isEmpty())
    {
      const newnode= new Node(value);
      this.top=newnode;
    //   this.arr.push(newnode.value);
    console.log('push new value');
      this.length+=1;
    }
    else{
        const newnode= new Node(value);
        newnode.next=this.top;
        this.top=newnode;
        // this.arr.push(newnode.value);
        
        this.length+=1;
        console.log('push new value');
        
    }

//    return this.top;

}


pop(){

    if(this.isEmpty())
    {
        return null;
    }
    else{
    const temp=this.top;
    this.top=this.top.next;
    temp.next=null;
    this.length-=1;
    // this.arr.pop();
    return temp;

    }


}

peek()
{
    if(this.isEmpty())
    {
        return "no Nodes in the stack";
    }
    return this.top;

}

isEmpty(){
    return this.top===null
}
 





}

module.exports=Stack;