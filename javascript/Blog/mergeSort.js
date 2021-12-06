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
    let k=0;
    let result=[];
    while (i<left.length && j<right.length) {
        if(left[i] <= right[j])
        {
        
            result[k]=left[i];
            i=i+1;
            // result.push(left[i]);
            // i++;
        }
        else
        {
           
            result[k]=right[j];
            j=j+1;
            // result.push(right[j]);
            // j++;
        }

     k=k+1;
    }
    while (i<left.length) {
        result[k]=left[i]
        i=i+1;
        k=k+1;

    }
    while (j<right.length) {
        result[k]=right[j]
        j=j+1;
        k=k+1;
    }
    return result;
    // return result.concat(left.slice(i)).concat(right.slice(j))
}
    
console.log(mergeSort([8,4,23,42,16,15]));
module.exports=mergeSort;

