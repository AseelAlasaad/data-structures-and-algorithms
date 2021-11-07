'use strict';

const Node=require('./node');

class LinkedList{
constructor(){
    this.head=null;
    this.tail=null;
    this.length=0
}


append(value){
    const newnode=new Node(value);
    this.length++;
    if(!this.head)
    {
        this.head=newnode;
        return this;
    }
    let currentnode=this.head;
    while(currentnode.next)
    {
        currentnode=currentnode.next;
    }
    currentnode.next=newnode;
    return this;
}

include(value)
{
    let node=this.head;
    // if(node.next!==null)
    // {
    while(node)
    {
        if(node.value===value||node.next.value===value){
            node=node.next;
            console.log('true');
            return true;
          
          }
          else{
            console.log('false');
              return false;
          }
    }
  

// }
}

toString()
{
    let node=this.head;
    let newstring="";
    while(node){
      
            console.log(node.value);
     
            newstring+=`{${node.value}}`+'->';
            if(node.next==null)
            {
                newstring+='NULL';
            }
            console.log(newstring);
            node=node.next;
    }
    return newstring;
}



insertBefore(ref,value)
{      let newnode=new Node(value);
    //current pointer
    let current=this.head;
   if(ref==this.head.value)
{
    
    newnode.next=this.head;
    this.head=newnode;
}
else{
  //while true
  while(current.next!==null){
    if(current.next.value==ref)
    {
     
        newnode.next=current.next;
        current.next=newnode;
        return;
    }
    current=current.next;

    }

}

  
}

insertAfter(ref,value){
    let newnode=new Node(value);
//current pointer
let current=this.head;
//while true
while(current.next!==null){
if(current.value==ref)
{
// { console.log('current.next.value',current.next.value);
//     console.log('current.value',current.next);
//     console.log('current.value',current.value);
    
     newnode.next =current.next;
    current.next=newnode

    return;
}
current=current.next;

}
}

}
module.exports=LinkedList;