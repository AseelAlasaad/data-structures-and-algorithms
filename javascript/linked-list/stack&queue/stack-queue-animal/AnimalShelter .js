'use strict';

// first-in, first-out approach.=> queue
const Queue=require('../queue/queue');
class  AnimalShelter {
    constructor(){
      this.dogQueue=new Queue();
      this.catQueue= new Queue(); 
    }

    // enqueue
// Arguments: animal
// animal can be either a dog or a cat object.

enqueue(animal)
{
    if(animal==='dog')
    {
       this.dogQueue.enqueue(animal);
       return animal;
    }
    if(animal=='cat')
    {
       this.catQueue.enqueue(animal);
       return animal;
    }
    return 'not dog or cat'

}

dequeue(pref)
{
    if(pref==="dog")
    {
        return this.dogQueue.dequeue();
    }

    else if(pref==="cat")
    {
        return this.catQueue.dequeue();
    }
    else{
        return null;
    }
}

}
module.exports=AnimalShelter;