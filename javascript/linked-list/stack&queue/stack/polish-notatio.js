const { contains } = require('cheerio');
const stack = require('./stack');

function solution(str) {
    let x, y;
    let result = '';
    let operation="";
  
    const s = new stack();
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "+" && str[i] != "-" &&
            str[i] != "*" && str[i] != "/") {
            s.push(str[i]);
            
            console.log(s);
            continue;
        }
        else {
            operation = str[i];
        
       
        switch (operation) {
            case "+":

                // s.push(s.pop()+s.pop())
                x=parseInt(s.pop());
                y=parseInt(s.pop());
                result=y+x
                s.push(result)
                break;
            case "-":
                x=parseInt(s.pop());
                y=parseInt(s.pop());
                result=x-y
                s.push(result)
                break;
            case "*":
                x=parseInt(s.pop());
                y=parseInt(s.pop());
                result=x*y
                s.push(result)
                break;
            case "/":
                x=parseInt(s.pop());
                y=parseInt(s.pop());
                result=y/x
                s.push(result)
                break;

            default:
                break;
        }
    }
    }
    return s.pop();

}
//postfix   
const str = "472*+1+"
// ["4","7","2","*","+"];//15


console.log(solution(str));

const makeStringGood = (s) => {
    let str=s.toLowerCase();
    let arr = str.split("");
    return arr.reduce((acc, s, index) => {
       
      if (arr[index]-arr[index + 1]) {
        acc = acc.replace(s, "");
      } else {
        acc += s;
      }
      return acc;
    }, "");
  };
  
  console.log(makeStringGood("mohHit"));

//   class Solution {
//     public String makeGood(String s) {
//       var sb = new StringBuilder();
//       for (int i = 0; i < s.length(); ++i) {
//         int l = sb.length();
//         if (l > 0 && Math.abs(sb.charAt(l - 1) - s.charAt(i)) == 32) {
//           sb.setLength(l - 1); // remove last char
//         } else {
//           sb.append(s.charAt(i));
//         }
//       }
//       return sb.toString();
//     }
//   }
