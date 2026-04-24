const fs=require('fs')
const http=require('http')
const port=3001
const Server=http.createServer((req,res)=>{
if(req.url==='/') {

    fs.readFile("Cbit.html",(err,data)=>{
        if(err) {
        res.writeHead(404,{'Content-Type':'text/plain'})
    
        res.end('Inetrnal server error')
        }
        else {
            res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
        }
    })
        
    }
    else if(req.url==='/about')
    {
        fs.readFile("Cbit.html",(err,data)=>{
        if(err) {
        res.writeHead(404,{'Content-Type':'text/plain'})
    
        res.end('Ineternal server error')
        }
        else {
            res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
        }
    })}
        
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    
    }
})
Server.listen(port,()=>{
    console.log('server running')
})