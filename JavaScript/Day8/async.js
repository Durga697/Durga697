// function main(m,n)
// {
//     setTimeout(() => {
//         for(let i=m;i<=n;i++)
//             {
//                 console.log(i);

// const { reject } = require("async");

                
//             }
//     }, 5000);
// }
// main(1,10)
// function demo(params) 
// {
//     console.log("Ooooooooooooooo");
// }
// demo()

// asynchronous function
//two methods

// window.setTimeout(()=>{
//     console.log("hi settomeout");
    
// },5000)


// window.setInterval(()=>{
//     console.log("hi setIntereval");
    
// },2000)

///promise
// new Promise((resolve,reject)=>{
//     --async-fun-code
// })
// .then(cbf)
// .catch(cbf)

// let online = window.navigator.onLine

// new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         if (online === true){
//             return resolve()
//         }else{
//             return reject()
//         }
        
//     }, 5000)
// })
// .then(() => console.log("online............")
// )
// .catch(() => console.log("offline.............")
// )

function main(m, n) 
{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }
            for (let i = m; i <= n; i++)
            {
                console.log(i);
            }
            return resolve()
        }, 5000);
    })
    .then(() => console.log("Promise is resolved"))
    .catch(() => console.log("Error occure"))
}
main(1,10)