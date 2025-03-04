import fetch from "node-fetch";


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then((data) =>console.log(data));


console.log("testing");