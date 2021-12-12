const HashMap=require('../Hashtable');
const repeatedWord=require('../repeated');
let hashMap=new HashMap(1024);
describe('Test Hash Method',()=>{

    it('Successfully hash a key to an in-range value',()=>{
       let key="name";
       expect(hashMap.hash(key)).toEqual(951);
    })
    
    it('Adding a key/value to your hashtable',()=>{
        let key="name";
        let value="Aseel"
        hashMap.add(key,value);
        expect(hashMap.contains(key)).toBe(true);
     })

     it('Retrieving based on a key returns the value stored',()=>{
        let key="test";
        let value="test"
        hashMap.add(key,value);
      
        expect(hashMap.get("test")).toEqual("test");
     })


     it('Successfully handle a collision within the hashtable',()=>{       
        hashMap.add("test","test");
        hashMap.add("tset","user");

      
        expect(hashMap.get("test")).toEqual("test");
        expect(hashMap.get("tset")).toEqual("user");

     })

 it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
       
        hashMap.add("mom","test");
        hashMap.add("mom","test");

      
        expect(hashMap.contains("mom")).toEqual(true);
        expect(hashMap.contains("mom")).toEqual(true);

     })

it('Successfully returns null for a key that does not exist in the hashtable',()=>{
       
      

      
        expect(hashMap.get("user")).toBe(null);

     })

     it('test the repeateWord function',()=>{
    
      const str="Once upon a time, there was a brave princess who..."
      
      expect(repeatedWord(str)).toEqual('a');

   })
   it('test the repeateWord function',()=>{
    
      const str="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
      
      expect(repeatedWord(str)).toEqual("it");

   })
   it('test the repeateWord function',()=>{
    
      const str="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
      
      expect(repeatedWord(str)).toEqual("summer");

   })

    })

