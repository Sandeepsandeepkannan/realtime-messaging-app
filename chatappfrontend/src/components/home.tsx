import { useEffect, useRef, useState } from "react"
import { Chatbox } from "./chatbox";

export function Home() {
     
  const socket=useRef<WebSocket | null>(null);
  const inputmessageref=useRef<HTMLInputElement | null>(null)
  const inputJoinmessageref=useRef<HTMLInputElement | null>(null)
  const [message,setmessages]=useState<string[]>([])
  
  const [joinbox,setjoinbox]=useState(true)

  useEffect(()=>{

       const wss=new WebSocket("ws://localhost:8080")
       socket.current=wss
       console.log("connection  established")

       wss.onmessage=(e)=>{
        const backendmessage=e.data
        setmessages(prev => [...prev, backendmessage]);
       }
              
            },[])

  function Sendmessage(){
            const message=inputmessageref.current?.value ?? ""
             interface messagetype{
                type:string;
                payload:{message:string}
              }
             
              const rawdata:messagetype=
              {type:"chat", payload:{message:`${message}`}}

              const data=JSON.stringify(rawdata)

            if(!socket.current){
              console.log("socket is null")
              return
            }
            if(socket.current.readyState!==WebSocket.OPEN){
              console.log("connection is not open")
              return
            }
            socket.current.send(data)
            console.log("message going")
       }
  
  function Joinmessage(){
              const room=inputJoinmessageref.current?.value ?? ""

              setjoinbox(false)

              interface roomtype{
                type:string;
                payload:{roomId:string}
              }
              
              const rawdata:roomtype=
              {type:"join", payload:{roomId:`${room}`}}

              const data=JSON.stringify(rawdata)

              if(!socket.current){
              console.log("socket is null")
              return
              }
              if(socket.current.readyState!==WebSocket.OPEN){
                console.log("connection is not open")
                return
              }
                socket.current.send(data)
                console.log("message going")
                alert("Connected to the server")
              
          }
          


  return (
    <div className="h-screen bg-blue-300 flex flex-col">

        <div className="h-[80%]  rounded-2xl text-2xl text-black font-semibold ">
                {joinbox?  <div className=" h-35 w-130 bg-gray-700 ml-110 mt-5 rounded-2xl "> 
                                <div  className="pl-52 text-white font-semibold pt-4 ">Join  Chat</div>
                              <div className="flex ">
                                <div  className="pt-4  ml-16">
                                    <input ref={inputJoinmessageref} className="bg-white w-50 h-10 rounded-2xl pl-10 text-black " type="text"  placeholder="Enter room" />
                                </div>

                                <div className=" pt-4"> 
                                  <button onClick={Joinmessage} className="bg-black text-white h-10  ml-10 w-30 rounded-2xl">Join</button>
                                </div>
                              </div>
                           </div>:<Chatbox messages={message}/>}
        </div>

        <div className="bg-gray-700 rounded-2xl flex-1 w-150 ml-100"> 
               <div  className="pt-5 pl-30">
                    <input ref={inputmessageref} className="bg-white h-13 w-90 rounded-2xl pl-10 text-black " type="text"  placeholder="TEXT HERE" />
               </div>
               <div className="pl-45 pt-5"> 
                    <button onClick={Sendmessage} className="bg-black text-white h-10  ml-10 w-30 rounded-2xl">Send</button>
               </div>
        </div>
      
    </div>
  )
}




