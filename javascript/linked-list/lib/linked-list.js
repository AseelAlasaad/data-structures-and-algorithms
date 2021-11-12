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
{    
   if(this.head==null)
   {
       console.log('null');
       return null;
   }
    let current=this.head;
   if(ref==this.head.value)
{
    let newnode=new Node(value);
    this.length++;
    newnode.next=this.head;
    this.head=newnode;
    return;
}
else{
  //while true
  while(current.next!==null){
    if(current.next.value==ref)
    {
        let newnode=new Node(value);
        this.length++;
        newnode.next=current.next;
        current.next=newnode;
        return;
    }
    current=current.next;

    }
    return null;

}

  
}

insertAfter(ref,value){
let newnode=new Node(value);
this.length++;
//current pointer
let current=this.head;
//while true
while(current.next!==null){
if(current.value==ref)
{
    newnode.next =current.next;
    current.next=newnode;
    return;
}
current=current.next;
}
if(current.value===ref)
{
    newnode.next =current.next;
    current.next=newnode;
    return;}
}


//kthFromEnd(k)
kthFromEnd(k){
   
if(!this.head || k<0|| k>=this.length)
{
   return null;
}
if(k=0){
    return this.tail.value;
}
if(k=this.length-1)
{   
return this.head.value;
}
let current=this.head;
for (let i = this.length-1; i>k; i--) {
   current=current.next;
   }
 return current.value; 
}

linkedListzip(L2,L3)
{ 
  let  margelist=new LinkedList();

  let current1=L2.head;
  let current2=L3.head;
    if(L2.length==0)
    {
        // console.log(L3);
        return L3;

    }
   if(L3.length==0)
    // {        console.log(L2.toString());
{
        return L2;
    }
  while(current1!==null || current2!==null)
    {
        if(current1!==null)
        {
            margelist.append(current1.value);
            current1=current1.next;
        }
        if(current2!==null)
        {
            margelist.append(current2.value);
            current2=current2.next;
        }
    }
return margelist.toString();
}

}
module.exports=LinkedList;