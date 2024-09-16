

 

const http = require("http");


const server = http.createServer(
 (req, res)   => {
    switch(req.url) {
    

           
            
            case "/1": res.end("Monday");
            
            break;
            
            
            case "/2":res.end("Tuesday");
            
            break;
            
           
            
            case "/3": res.end("Wednesday");
            
            break;
            
            
            case" /4":res.end("Thursday");
            
            break;
            
          
            
            case" /5":res.end("Friday");
            
            break;
            
         
            
            case "/6":res.end("Saturday");
            
            break;
            
            case 7:
            
            case "/7":res.end("Sunday");
            
            break;
            
            default:
            
            res.end("Invalid day");
            
            } });
 

server.listen(5000, () => console.log("Server is Listning...."))