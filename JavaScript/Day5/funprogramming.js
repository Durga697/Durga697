// function main(task)
// {
//     let a = Number(prompt("enter a :"))
//     let b = Number(prompt("enter b :"))
//     let c = Number(prompt("enter c :"))
// }
// main(function(a,b,c){
//     return a + b + c
// })
// main(function(a,b,c){
//     return a - b - c
// })
// main(function(a,b, c){
//     return a * b * c
// })
// main()
// Arrow function

// let a = () => console.log(("hellllo"));
// console.log(a);
// a()

// let b = () => {return "helloooo"}
// console.log(b);
// console.log(b());

// let main1 = (task) => {                //function for arrow fun for HOF
//     console.log(task);
//     console.log(task());
    
    
// }
// main1(() =>{
//     return "DP"
// })

let operation = (a,b,task) => {
    console.log(task(a,b));
    
}
operation(a = Number(prompt("Enter")), b = Number(prompt("Enter")) , (a,b) => {return a+b})
operation(a = Number(prompt("Enter")), b = Number(prompt("Enter")) , (a,b) => {return a-b})