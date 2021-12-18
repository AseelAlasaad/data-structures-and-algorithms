// // function getMax(stack){
 
// // //    const temp=this.top
// //    let max=stack.arr[0];
// //    for (let i=0;i<stack.arr.length;i++) {
// //         if(stack.arr[i]>max)
// //        {
         
// //            max=stack.arr[i];
// //        }
// //    }
// //   console.log('MAx:', max);
// //    return max;
// // }

// // module.exports=getMax;

// //time O(n)
// //space O(n)


// class MaxStack {

//     constructor() {
//       this.stack = new Stack();
//       this.size = 0;
//       this.maxValues = new Stack();
//     }
  
//     push(value) {
//        let max=value;
     
//         if (!this.maxValues.isEmpty() && max< this.maxValues.peek().value) {
//           max=this.maxValues.peek().value;
//       }
    
     
//       this.stack.push(value);
//       this.maxValues.push(max);
//       this.size += 1
    
//     }
  
//     pop() {
     
//        this.stack.pop();
//        this.maxValues.pop();
//        this.size -= 1
   
//     }

//     findMin() {
//       // console.log(this.maxValues.peek().value);
//       return this.maxValues.peek();
//     }
// }

// console.log(m.maxValues);
// console.log(m.findMin());


// module.exports=MaxStack;
const Stack=require('./stack')
class MaxStack {

    constructor() {
      this.stack = new Stack();
      this.size = 0;
      this.maxValues = [];
    }
  
    push(element) {

        if (this.size === 0 || element>= this.findMax()) {
        this.maxValues.push(element)
        console.log(this.maxValues);
      }
      else {
        this.maxValues.push(this.findMax())
      }
      this.size += 1
      this.stack.push(element);
      return this.stack
    }
  
    pop() {
      if (this.size > 0) {
        this.size -= 1;
        this.maxValues.pop()
        return this.data.pop()
      }
    }

    findMax() {
      return this.maxValues[this.size - 1]
    }
}



let m= new MaxStack();
m.push(2);
m.push(5);
m.push(10);
console.log(m);
// m.findMin()
console.log(m.findMax());

module.exports=MaxStack;

// const Stack=require('./stack');

function Sort(stack,temp){
   
   let node=stack.pop();
   
   temp.push(node.value)
   while(stack.top!==null)
   {  
     let tempNode=stack.pop();
     while(temp.top !==null)
     {
       if(tempNode.value>temp.top.value)
       {
         let popNode=temp.pop();
         stack.push(popNode.value);
         
        }
        else{
          break;
        }    
    }
    temp.push(tempNode.value);
   }
   while (temp.top!==null) {
     let current=temp.pop();
     stack.push(current.value);
   }
  // stack.top.value=-1;
   return stack;

}

// const getmin=(stack)=>{
//   return stack.top.value;
// }

// const getMax=(stack)=>{
//   return stack.top.value;
// }

// function getMax(stack,temp)
// {
//    const max= stack.pop();
//    temp.push(max.value);
   
//    while (stack.top!==null) {
//      let nextEle=stack.pop();
//     //  console.log(nextEle);
//      while (temp.top!==null) {
//       console.log(nextEle);
//        if (nextEle.value>temp.top.value) {
//          temp.push(nextEle.value);
       
//        }
//        else{
//          stack.pop();
//         console.log(temp);
//         return;
//        }
//      }
//    }
   
//   return temp;

// }
// const Stack=require('./stack')
// let S1=new Stack();

// S1.push(65);
// S1.push(85);
// S1.push(25);
// S1.push(75);
// let temp=new Stack();
// let sort=Sort(S1,temp);
// console.log(sort);
// console.log(getMax(S1));
// getMax(S1,temp);
