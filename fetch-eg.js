import fetch from "node-fetch";

function getData(){
    fetch('http://date.jsontest.com/')
    .then((response)=>response.json())
    .then((data)=>console.log(data));
}

getData();
    
