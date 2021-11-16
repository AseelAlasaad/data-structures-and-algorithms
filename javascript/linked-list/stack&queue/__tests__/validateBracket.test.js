'use strict';

const validateBracket=require('../stack-queue-brackets/brackets');

describe('test validate Bracket',()=>{

    it('test validate Bracket',()=>{
        let str="(){}"
        expect(validateBracket(str)).toBeTruthy();
    
        expect(validateBracket('()[[Extra Characters]]')).toBeTruthy();
        expect(validateBracket('(){}[[]]')).toBeTruthy();
    })

    it('test validate Bracket not balanced',()=>{
        let str="[({}]"
        expect(validateBracket(str)).toBeFalsy();
    
        expect(validateBracket('(](')).toBeFalsy();
        expect(validateBracket('(')).toBeFalsy();
    })
})