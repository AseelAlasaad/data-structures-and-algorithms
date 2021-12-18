const HashMap = require('./Hashtable');

function uniqueCharacters(str)
{
    const HM=new HashMap(1024);
    let s= str.replace(" ","");
    if(s.length==0)
    {
        return "Empty string";
    }
  
    for (let i = 0; i < s.length; i++)
    {     
    
            if (HM.contains(s[i])) {
                return false;
            }
            else{
                HM.add(s[i],s[i]);
            }
                             
    }  
    return true;

}
const myHash = new HashMap(1024);



myHash.add('key','Donald the duck')

const str=myHash.get('key')
console.log(uniqueCharacters(str));
