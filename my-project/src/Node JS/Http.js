const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req)
})
const port=3005;
server.listen(port,()=>{
    console.log(`porgram is run http://localhost:${port}`)
})