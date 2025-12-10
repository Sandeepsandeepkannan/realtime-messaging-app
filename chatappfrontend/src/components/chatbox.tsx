

interface chatboxtype{
    messages:string[]
}

export function Chatbox(props:chatboxtype){

    return  <div className="bg-white h-130 w-280 ml-37 mt-5 rounded overflow-y-scroll overflow-x-hidden scroll-smooth">
            
        {props.messages.map((msg, i) => (
            <div key={i} className="p-2  m-2 rounded bg-blue-100">
            {msg}
            </div>
        ))}


    </div>

}