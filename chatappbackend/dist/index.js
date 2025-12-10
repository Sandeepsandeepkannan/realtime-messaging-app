import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
const allsockets = [];
wss.on("connection", (socket) => {
    console.log("web socket server connnected ");
    socket.on("message", (e) => {
        const message = e.toString();
        const cleaned = message.trim();
        const cleanedmessage = JSON.parse(cleaned);
        console.log("message received on backend");
        if (cleanedmessage.type == "join") {
            allsockets.push({ socket: socket,
                room: cleanedmessage.payload.roomId
            });
            console.log("User joined room:", cleanedmessage.payload.roomId);
        }
        if (cleanedmessage.type == "chat") {
            let currentuserroom = null;
            for (let i = 0; i < allsockets.length; i++) {
                if (allsockets[i]?.socket == socket) {
                    currentuserroom = allsockets[i]?.room;
                }
            }
            console.log("chat is " + cleanedmessage.payload.message);
            for (let i = 0; i < allsockets.length; i++) {
                if (allsockets[i]?.room == currentuserroom) {
                    allsockets[i]?.socket.send(cleanedmessage.payload.message);
                }
            }
        }
    });
});
//  let usercount=1
//  let  allsockets=[]
// wss.on("connection",(socket)=>{
//         console.log("web socket server connnected ")
//         console.log("client count is "+usercount)
//         usercount=usercount+1
//         allsockets.push(socket)
//       socket.on("message",(e)=>{
//         const message=e.toString()
//         console.log("the message is "+message)
//         for(let i=0;i<allsockets.length;i++){
//             allsockets[i]?.send(message)
//         }
//       })  
// })
//# sourceMappingURL=index.js.map