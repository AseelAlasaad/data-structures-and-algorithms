const queue=require('../queue/queue');

class StackUsingQueue{

constructor()
{
    this.q1=new queue();
    this.q2=new queue();
    this.count=0;
}

push(value)
{ 
  this.count++;
  while (!this.q2.isEmpty()) {
      this.q1.enqueue(this.q2.peek());
      this.q2.dequeue();
    }
    this.q2.enqueue(value);
    while (!this.q1.isEmpty()) {
        this.q2.enqueue(this.q1.peek());
        this.q1.dequeue();
      }
    //   console.log(this.q2);
     
}
pop()
{ 
    if (this.q2.isEmpty()) {
        return null;
    }
    
    this.count--;
    let ret=this.q2.front
    this.q2.dequeue();
    return ret;
}



}

const S=new StackUsingQueue();
S.push(5);
S.push(6);
S.push(7);

S.pop();
S.pop();
// S.pop();
// console.log(S.peek());
console.log(S);
// console.log(S.pop());
// console.log(S.pop());

// console.log(S.pop());
