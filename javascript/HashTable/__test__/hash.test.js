const HashMap=require('../Hashtable');

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

    })

