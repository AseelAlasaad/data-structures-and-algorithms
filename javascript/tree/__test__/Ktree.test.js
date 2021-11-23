const kTree=require('../K-tree/K-tree');
const Node=require('../K-tree/node');
const FizzBuzz=require('../K-tree/FizzBuzz');
describe('test  KTree',()=>{
    
    it('instantiate an empty tree',()=>{
        const tree= new kTree(null);
        expect(tree.root).toEqual(null);
    }) 

    it('test Fizz Buzz',()=>{
        const root=new Node(1);

        const one=new Node(5);
        const tow=new Node(15);
        const three=new Node(3);
        root.children[0]=one;
        root.children[1]=tow;
        root.children[2]=three;

        const tree= new kTree(root,[one,tow,three]);

        
        const result=[1,'Buzz','FizzBuzz','Fizz']
        expect(FizzBuzz(tree)).toEqual(result);
    }) 

})