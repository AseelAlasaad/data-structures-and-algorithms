const stack = require('./stack');
const queue = require('../queue/queue');

function getSecondMax(stack)
{
   let arr=[];
   let first=stack.top.value;
   let second=0;
   while (stack.top!==null) {
       let item=stack.pop()
       arr.push(item);
   }
   for (let i = 0; i < arr.length; i++) {
       if(arr[i]> first)
       {
           second=first;
           first=arr[i];
       }
       else if(arr[i]> second && arr[i] <first){
           second=arr[i]
       }
       
   }
//    let maxindex=arr.indexOf(first);
//    arr[maxindex]=-1;   
//    console.log(arr);
return second;
}


const s2=new stack();
s2.push(2);
s2.push(3);
s2.push(1);
s2.push(4);
console.log(getSecondMax(s2));




function reverse(str)
{
    const s1=new stack();
    // const q1=new stack();

    let revStr='';
    for (let i = 0; i < str.length; i++) {
        s1.push(str[i]);
    }
    while (!s1.isEmpty()) {
        revStr=revStr+s1.pop();
      
    }
    
  return revStr;
}

const str="Hello";
console.log(reverse(str));

// function Queuereverse(q)
// {   let str=''
//     const s1=new stack();
//     while (!q.isEmpty()) {
//        s1.push(q.peek()); 
//        q1.dequeue();
//     }
//     while (!s1.isEmpty()) {
//         q.enqueue(s1.peek());
//          str=str+s1.pop()
      
//     }
    
//   return str;
// }
// const q1=new queue();
// q1.enqueue('A');
// q1.enqueue('s');
// q1.enqueue('e');
// q1.enqueue('e');
// q1.enqueue('l');
// console.log(Queuereverse(q1));

function palindroim(s)
{   
    let str=s.toLowerCase();
    let size=str.length;
    const S=new stack();
    let mid=Math.floor(size/2);
    let i=mid;
    for (let x = 0; x < mid; x++) {
      
      S.push(str[x]);
        
    }
    if(size%2 !==0)
    {
        i++;
    }
    let item;
    while (i!=size) {
        item=S.top.value;
        S.pop();
        console.log(i);
        if(item!==str[i])
         return false;
         i++;
       
        
    }
  return true;

}

const s='geeksforgeeks';
console.log(palindroim(s));

function duck(str,k)
{
    
  let value=""
  const q=new queue()
  if(str.length!==0)
  {
      for (let i = 0; i < str.length; i++) {
          q.enqueue(str[i]);
          
      }
    }
    else return "no string";

    while (q.length!==1) {
        for (let i = 0; i <k-1; i++) {
          value=q.dequeue();
          console.log(value);
          q.enqueue(value);
            
        }
        q.dequeue();
    }
    
    return `The last person ${q.dequeue()}`;




}

console.log(duck("ABCDE",3));