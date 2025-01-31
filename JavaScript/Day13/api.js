// let obj = {
//     name : "DP",
//     id : 1,
//     designation : "DEV"
// }
// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);
// let obj2 = JSON.parse(obj1)
// console.log(obj2);

//3-ways
// -->fetch()
// AJAX() 
// AXIOS
    
// let a = window.fetch("data.json")
// console.log(a);

// window.fetch("data.json")
// .then((data) => data.json)
// .then((res) => {
//     // console.log(res);
//     // console.log(res[0]);
//     // console.log(res[1]);
//     // console.log(res[0].name);

// res.map((x) => {
//     console.log(x);
//     console.log(x.name);
//     console.log(x.id);
//     console.log(x.Des);
    
//     document.body.innerHTML += `<h1>${x.name}</h1>`;
//     document.body.innerHTML += `<h1>${x.id}</h1>`;
//     document.body.innerHTML += `<h1>${x.name}</h1>`;
//     document.body.innerHTML += `<h1>${x.id}</h1>`;
// })
    
// })


// let obj={
//     namr:'varshith',
//     id:10,
//     age:20
// }
// console.log(obj);
// let a=JSON.stringify(obj);
// console.log(a);
// let b=JSON.parse(a)
// console.log(b);

// three way to featch the json data 
// 1 fetch()\
// 2 axios
// 3 AJAX
let a = window.fetch("https://fakestoreapi.com/products")
  .then((val) => val.json())
  .then((res) =>{ console.log(res);
    // console.log(res[0])
    // console.log(res[0].name)
    res.map((v)=>{
        console.log(v);
        console.log(v.name)
        document.body.innerHTML+=`<h1>${ v.image}</h1>`
        document.body.innerHTML+=`<img src='${v.image}'>`
    })
  });