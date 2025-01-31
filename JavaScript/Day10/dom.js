console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "Durga Prasad0"
console.log(document.body);

let link = document.links
console.log(link);
// console.log(link[0]);
// console.log(link[1]);
// console.log(link[2]);

for (let i = 1; i < link.length; i++){
    console.log(link[i]);
    link[i].className = "demo"
    link[i].href = "http://www.youtube.com"
    link[i].target = "__blank"
}

//in-direct access (methods in dom)
// 1.document.getElementById("value")
// 2.document.getElementsByClassName("vale")
// 3.document.getElementsByTagName("vale")
// 4.document.getElementsByName("")
// 5.document.querySelector("value")
// 6.document.querySelectorAll("value")

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "Durga Prasad"
console.log(a);
a.style.backgroundColor = "Green"
a.style.textAlign = "center"

let b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor = "yellow"

console.log(b[1]);

let c = document.getElementsByTagName('p')
console.log(c);
console.log(c[1]);
c[1].style.color = "Blue"
c[1].textContent = "Durga Prasad"

let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor = "Crimson"

// console.log(document.body.childNodes);

// document.querySelector()
let e = document.querySelector("#demo")
console.log(e);

console.log(document.querySelectorAll(".demo1"));

// document.querySelectorAll()
let f = document.querySelectorAll("#demo")
console.log(f);
console.log(f[0]);

let f1 = document.querySelectorAll(".demo1")
console.log(f1);
console.log(d[f1]);


//events in dom 

