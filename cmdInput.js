const axios = require('axios');

console.log("Type your node.js code bellow\nWhen you finsh coding type word `end` and press Ender key\n-----------------");

let script = '';
process.stdin.on('data', (input) => {
    input = input.toString('utf8');
    script += input;
    if(input.trim().slice(-3) == "end"){
        runInServer(script);
        console.log("----------------\nRunning your script in server\n----------------")
        script = '';
    }
})

function runInServer(script){
    axios
    .post('http://localhost:8080', "let a = 2; console.log(a);")
    .then(res => {
        console.log("Your output is:")
        console.log(res.data, '\n----------------');
    })
    .catch(err => {
        console.log(err)
    })
}