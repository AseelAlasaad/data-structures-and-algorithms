
// str= {} or (){} etc
const stack=require('../stack/stack');
function validateBrackets(str)
{
    const open=new stack();
    for (let i = 0; i < str.length; i++)
    {
        let current = str.charAt(i);
       
        if (current == '{' || current == '(' || current == '[')
        {
            open.push(current);
            console.log(open);
        }
        else if(current===')'&& open.length!==0 && open.top.value=='(')
        {
            open.pop();
        }
        else  if(current==='}'&& open.length!==0 && open.top.value=='{')
        {
            open.pop();
        }
       else if(current===']'&& open.length!==0 && open.top.value=='[')
        {
            open.pop();
        }
        else return false
    }
    if(open.length!==0)
    {
        return false
    }
    
    return true;
}

console.log(validateBrackets("()[)"));
module.exports=validateBrackets;