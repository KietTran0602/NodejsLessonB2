import http from "http";
import {tasks} from "./data.js";
// tao sever moi
const server = http.createServer();

// server.on("request", (req,res) => {
//     url: req.url;
//     if(url === "/redirect/gg"){
//         res.writeHead(301, {
//             location: "https://google.com"
//         });
//         res.end;
//         return;
//     }
//     console.log("Handle request",
//     {url: req.url,
//     method: req.method,
//     body: req.body});
    
//     res.end("Hello NodeJs");
// });

server.on("request", async (req,res) => {
    //duong dan client request len
    const url = req.url;
    //biet duoc http method
    const method = req.method;

    switch(url){
        case "/tasks":
            if(method === "GET"){
                //Xu li tra ve danh sach tasks
                res.setHeader("Content-Type","application/json");
                res.writeHead(200);                
                res.end(JSON.stringify(tasks));
            }
            break;
        default: 
            res.writeHead(404);
            res.end;
            break;
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});