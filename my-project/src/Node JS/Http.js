const http=require('http')
const {url} = require ('inspector');
const server=http.createServer((req,res)=>{
console.log(req.url);
// if(req.url==='/home'){
//     res.setHeader('Contact-Type','text-html')
//     res.write('<html><head><title><body><h3 style="color: red;">Wellcome</h3><input type="text" name="username" placeholder="Enter your username"></body></title></head></html>')
// }
// res.setHeader('Contact-Type','text-html')
//   res.write('<html><head><titel><body><h3>Good Najmul </h3></body></titel></head></html>')
})
function HTTP(){
    
    return(
        <>
        {/* <h1>Najmul AKash</h1> */}
        </>
    )
}
const Port=3002;
server.listen(Port,()=>{
    console.log(`programm is running http://localhost:${Port}`)
})
export default HTTP