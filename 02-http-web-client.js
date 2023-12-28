const axios = require("axios");

console.log("## HTTP client started.");

console.log("## GET request for http://localhost:8080/temp/");
axios.get('http://localhost:8080/temp/')
    .then(function(response) {
        console.log("## GET response [start]");
        console.log(response.data);
        console.log("## GET response [end]");
    })
    .catch(function(error) {
        console.log(error);
    });

console.log("## GET request for http://localhost:8080/?var1=9&var2=9");
axios.get('http://localhost:8080/?var1=9&var2=9')
    .then(function(response) {
        console.log("## GET response [start]");
        console.log(response.data);
        console.log("## GET response [end]");
    })
    .catch(function(error) {
        console.log(error);
    });

console.log("## POST request for http://localhost:8080/ with var1 is 9 and var2 is 9");
axios.post(`http://localhost:8080`, { var1: '9', var2: '9' })
    .then(function(response) {
        console.log("## POST response [start]");
        console.log(response.data);
        console.log("## POST response [end]");
    })
    .catch(function(error){
        console.log(error); 
    });

console.log("## HTTP client completed.")