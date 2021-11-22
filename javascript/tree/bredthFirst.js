// const Queue= require('../linked-list/stack&queue/queue/queue');

function breadthFirst(tree)
{
   let visited=[];
   let queue=[];

   let current=tree.root;
   queue.push(tree.root);
   while (queue.length>0) {
       current=queue.shift();
    //    console.log(current);
       if(current.left)
       {
           queue.push(current.left);
       }

       if(current.right)
       {
           queue.push(current.right);
       }
       visited.push(current.value);
   }
   console.log(visited);
   return visited;
} 
module.exports=breadthFirst;