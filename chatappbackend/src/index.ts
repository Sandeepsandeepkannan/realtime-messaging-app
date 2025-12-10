import {WebSocketServer,WebSocket} from "ws"

const wss=new WebSocketServer({port :8080})

interface user{
    socket:WebSocket,
    room:String
}

const allsockets:user[]=[]

wss.on("connection",(socket)=>{
    console.log("web socket server connnected ")

    socket.on("message",(e)=>{
        const message=e.toString()
        const cleaned=message.trim()
        const cleanedmessage=JSON.parse(cleaned)
        console.log("message received on backend")

        if(cleanedmessage.type=="join"){
              allsockets.push({socket:socket,
                room:cleanedmessage.payload.roomId
        })
            console.log("User joined room:", cleanedmessage.payload.roomId);
             
        }
        if(cleanedmessage.type=="chat"){
            let currentuserroom=null
            for (let i=0;i<allsockets.length;i++){
                if(allsockets[i]?.socket==socket){
                    currentuserroom=allsockets[i]?.room
                }
            
            }
            console.log("chat is "+cleanedmessage.payload.message)
            for(let i=0;i<allsockets.length;i++){
                if(allsockets[i]?.room==currentuserroom){
                    allsockets[i]?.socket.send(cleanedmessage.payload.message)
                }
            }
        }
            
    })
})

