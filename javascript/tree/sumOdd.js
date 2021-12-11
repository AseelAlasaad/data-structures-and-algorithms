function sumOdd(tree)
{
  let arrOfnodes= tree.preOrder();
  let sumOdd=0;
 for (let i = 0; i < arrOfnodes.length; i++) {
     if(arrOfnodes[i] % 2 !=0)
     {
        sumOdd = sumOdd + arrOfnodes[i];
     } 
 }
  return sumOdd;
}

module.exports=sumOdd;