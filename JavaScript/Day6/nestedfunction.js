// function parent()
// {
//     function child()
//     {
//         console.log("i am child fun");
        
//     }
//     child()
// }
// parent()

// var a = 10;
// let b = 100;
// function parent1()
// {
//     var a = "hello"; 
//     let b = "hi";
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);
    
// }
// parent1()

//lexical scope / scope-chain 
// function main()
// {
//     let a = 10;
//     function child()
//     {
//         console.log(a);
        
//     }
//     child()
// }
// main()

//closer
// function parent()
// {
//     let a = 100;
//     function child()
//     {
//         console.log(a);
//     }
//     return child
// }
// parent()()

function parent()
{
    function child1()
    {
        console.log("C1");
        function child1_1()
        {
            console.log("C3");
        }    
        return child1_1
    }
    function child2()
    {
        console.log("c2");
        
    }
    return [child1, child2]
}
parent()[0]()()
parent()[1]()