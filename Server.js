http = require('http');
const { spawn } = require('child_process');
http.createServer(function (req, res) {
    let script = "";
    req.on("data", (data)=>{
        script += data.toString('utf8');
    })
    req.on('end', ()=>{
        console.log(script)
        child = spawn("node", ['-e', script])
        child.stdout.on('data', function(data) {
            res.write(data.toString('utf8'));
            res.end()
        } )
    })
}).listen(8080);