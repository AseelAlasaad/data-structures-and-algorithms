'use strict';

const IS=require('../insertionSort');
const MS=require('../mergeSort');


describe(' Sort Algorithm',()=>{
    
    it('Reverse-sorted: ',()=>{
        const arr=[20,18,12,8,5,-2]
        expect(IS(arr)).toEqual([-2,5,8,12,18,20]);
    })

   
    it('Few unique ',()=>{
        const arr=[5,12,7,5,5,7]
        expect(IS(arr)).toEqual([5,5,5,7,7,12]);
    })
  
 

   
    it('  Nearly-sorted ',()=>{
        const arr=  [2,3,5,7,13,11]
        expect(IS(arr)).toEqual([2,3,5,7,11,13]);
    })

      
    it('merge Sort ',()=>{
        const arr=[20,18,12,8,5,-2]
        expect(MS(arr)).toEqual([-2,5,8,12,18,20]);
    })




})