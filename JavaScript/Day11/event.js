function demo()
{
    console.log("Hello World");
    
}
demo()

let a = document.getElementById("demo1")
console.log(a);

a.onclick = function(dp){
    console.log(dp);
//     let res = Math.round(Math.random() * 10)
//     console.log(res):
    let res = Math.round(Math.random() * 1000) . toString(16)
    console.log(res);
    
    document.body.style.backgroundColor = `#${res}`

}

// let demo2 = document.getElementById("demo2")
// console.log(demo2);

// let color = window.prompt("Annaaww Color Cheppu")
// console.log(color);

// demo2.innerHTML = color

// demo2.onmouseover = () => {
//     document.body.style.backgroundColor = `${color}`
//     document.body.style.transition = "ease all 3s"
// }

let demo4 = document.getElementById("demo4")
console.log(demo4);

demo4.addEventListener("click", () => {
    let demo3 = document.getElementById("demo3").value
    console.log(demo3);
    let AnnaCheppu = new SpeechSynthesisUtterance
    console.log(AnnaCheppu);
    AnnaCheppu.text = demo3
    speechSynthesis.speak(AnnaCheppu)
       
})