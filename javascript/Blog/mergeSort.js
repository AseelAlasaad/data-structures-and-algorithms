'use strict';
// arr=[8,4,23,42,16,15]
function mergeSort(arr)
{  
    
    if(arr.length===1) return arr;


    let n= arr.length; 
    if(n>1)
    {
        let mid=Math.floor(n/2);
        let left=arr.slice(0,mid);
        let right=arr.slice(mid);
        return merge( mergeSort(left), mergeSort(right));
    }

}
function merge(left,right)
{
    let i=0;
    let j=0;
    let result=[];
    while (i<left.length && j<right.length) {
        if(left[i] < right[j])
        {
        
            result.push(left[i]);
            i++;
        }
        else
        {
            
            result.push(right[j]);
            j++;
        }
     
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}
    
console.log(mergeSort([8,4,23,42,16,15]));
module.exports=mergeSort;

