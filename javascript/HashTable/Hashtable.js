'use strict';
const LinkedList= require('../linked-list/lib/linked-list');

class HashMap{
    constructor(size)
    {
        this.size=size;
        this.map=new Array(size);
    }

    hash(key)
    {
        const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);        const withprime= assciSum * 599;
        
        // console.log(withprime % this.size);
        return withprime % this.size;
    }

    add(key,value)
    {
        const hash= this.hash(key);
        const entry= {[key]: value};

        if(!this.map[hash])
        {   //use linkedlist to handle collisions
            this.map[hash]=new LinkedList();
        }

        this.map[hash].append(entry);

    }

    get(key)
    {
      const hash=this.hash(key);
     
      if(this.map[hash]){
        let current=this.map[hash].head;
        while (current) {
        if(current.value[key])
        {   
            // console.log(current);
            // console.log( current.value[key]);
            return current.value[key];
    

        }
        current=current.next;
    }}
    else{
        return null;
    }
    }
    contains(key)
    {
      const hash=this.hash(key);
     
      if(!this.map[hash]){
          return false;
      }
      
      let current=this.map[hash].head;
      console.log(Object.keys(current.value)[0]);
      while (current) {
          if(Object.keys(current.value)[0]===key)
          {
              
          return true;

          }
          else{
              return false;
          }
      }
    }
    
     
}

// const myHash = new HashMap(1024);

// myHash.add('🍕', '🍕');

// myHash.add('name', 'Aseel');
// myHash.add('age', '23');
// myHash.add('University', 'Yarmouk');
// myHash.add('City', 'Irbid');

// myHash.map.forEach(l=>{
//     console.log(l.values());
// });
// console.log(myHash.get('name'));//Aseel
// console.log(myHash.contains('name')); //true

// console.log(myHash.contains('year')); //false

module.exports=HashMap;