const HashMap=require('./Hashtable');

function repeatedWord(s)
{
    const HM=new HashMap(1024);

     let string= s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
     let str=string.toLowerCase();
    let arr=[];
    arr=str.split(" ");
    let maxWord='';
    let count=-1;
    for (let i = 0; i < arr.length; i++) {
     if(HM.contains(arr[i]))
     {
         let index=HM.get(arr[i]);
         HM.add(arr[i],index+1);
         if(count < (index+1))
         {
             maxWord=arr[i];
             count=1+index;
         }
         
        }
        else{
            HM.add(arr[i],1);
            if(count<1)
           {
               maxWord=arr[i];
               count=1;
           }
     
           } 
      
    }
    console.log(maxWord,count);
     return maxWord;    
  

}


// const myHash = new HashMap(1024);



// myHash.add('key', 'Once upon a time, there was a brave princess who a asel is a')

// const str=myHash.get('key')
// console.log(str);


// console.log(repeatedWord(str));
module.exports=repeatedWord;