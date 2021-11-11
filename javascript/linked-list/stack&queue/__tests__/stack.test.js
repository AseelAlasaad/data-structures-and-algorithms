'use strict';


const Stack = require('../stack/stack')


describe('Stack', () => {

    it('works',()=>{
        expect(true).toBeTruthy();
      });

    it('push new node',()=>{
       let newstack=new Stack();
       //Can successfully push onto a stack
       newstack.push(1);
       //Can successfully push multiple values onto a stack
       newstack.push(2);
       newstack.push(3);
       newstack.push(4);
       expect(newstack.top.value).toEqual(4);

    });
    it('pop node',()=>{
        let newstack=new Stack();
        //Can successfully pop off the stack
        newstack.pop();
        newstack.pop();
        newstack.pop();
        expect(newstack.top).toEqual(null);
      //Can successfully empty a stack after multiple pops
        expect(newstack.isEmpty()).toBeTruthy();
     });

     it('is Empty',()=>{
    //Can successfully instantiate an empty stack  
      let newstack=new Stack();
      expect(newstack.isEmpty()).toBeTruthy();
  

   });
  //  Can successfully peek the next item on the stack
  it('peek',()=>{
      
    let newstack=new Stack();
    newstack.push(2);
    expect(newstack.peek()).toEqual(2);

 });
 //pop or peek on empty stack 
 it('pop or peek on empty stack ',()=>{
      
  let newstack=new Stack();
  expect(newstack.pop()).toBeFalsy();

});

});