// (function(){
//     console.log("hello");
    
// })();

// ((a , b) =>  {
//     console.log(a+b);
    
// })(10,10);

// (function demo()
// {
//     console.log("hiiii");
    
// })();

//array in js
let arr = [10, "hello" , true, 1n, undefined]
console.log(arr);
 
//using new keyword

let arr1 = new Array(10, 20,30)
console.log(arr1);

//objects in js 
//-> used to store data in the form of key and value pair.

let obj = {
    names : "abc",
    num : 1,
    lastname:'dp',
    boolean : true,
    arr : [10,20,30],
    null : null,
    undefined : undefined,
    demo : function()
            {
                console.log("Hi");
                
            },
    fullname:function(){
        var dd=this.demo();
        return this.names+" "+this.lastname+dd;
    }
    

}
console.log(obj.names)
console.log(obj.fullname.apply())

function obj1(name, id)
{
    this.name = name;
    this.id = id;
}
let p1= new obj1("abc", 1)
console.log(p1);
console.log(p1.name);
console.log(p1.id);



