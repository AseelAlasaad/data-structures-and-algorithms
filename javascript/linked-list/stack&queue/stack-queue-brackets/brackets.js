
// str= {} or (){} etc
function validateBrackets(str)
{
  let open=[];
  let close=[];
for (let i = 0; i < str.length; i++)
{
    let current = str.charAt(i);
    if (current == '{' || current == '(' || current == '[')
    {
        open.push(current);
    }
    if(current==='}')
    {
        close.push('}');
    }
    else  if(current===')')
    {
        close.push(')');
    }
    else  if(current===']')
    {
        close.push(']');
    }
}
if(open.length<close.length ||open.length>close.length)
{
    return false
}

return true;
}

module.exports=validateBrackets;