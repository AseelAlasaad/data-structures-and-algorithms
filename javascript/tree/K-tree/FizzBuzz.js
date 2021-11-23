function FizzBuzz(tree)
{
  if(tree.root==null) return false;
  let kTree=tree;
  let FizzBuzz=[]
  let travers=(node)=>{

    if(node.value  % 3==0 && node.value %5==0)
    {
        FizzBuzz.push('FizzBuzz');
    }
   
    else if(node.value  % 5==0)
    {
        FizzBuzz.push('Buzz');
       
    }
    else if(node.value % 3==0)
    {
        FizzBuzz.push('Fizz');
        
    }
    else{
        FizzBuzz.push(node.value);
    }

    for (let i = 0; i < node.children.length; i++) {
      travers(node.children[i]);
      
    }
    
  }
  travers(kTree.root);
  return FizzBuzz;

}
module.exports=FizzBuzz