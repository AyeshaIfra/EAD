const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    else if(req.url==='/about')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Abouut page</h1>')
        res.end()
    }
    else if(req.url==='/contact')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Contact page</h1>')
        res.end()
    }
    else {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    
    }
})

server.listen(3000,()=>{
    console.log('Server running on port')
})