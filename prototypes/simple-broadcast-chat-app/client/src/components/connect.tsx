import toast from "react-hot-toast";
import { useState, useEffect, useRef } from "react";

export const Connect = () => {

    const [connected, setConnected] = useState<boolean>(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    const ws = useRef<WebSocket | null> (null);

    const handleConnect = () => {
        ws.current = new WebSocket("ws://localhost:8080");

        ws.current.onopen = () => {
            setConnected(true);
            toast.success('Connected successfully');
        }

        ws.current.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        }

        ws.current.onclose = () => {
            setConnected(false);
            toast('Disconnected');
        }
    }

    const handleSend = () => {
        try{
            if(ws.current && ws.current.readyState == WebSocket.OPEN){
                const data = JSON.stringify({
                    type: "broadcast",
                    payload: {
                        message: String(input.trim())
                    }
                });
                ws.current.send(data);
                toast.success('Sent successfully');
            }
            setInput("");
        }
        catch(e){
            toast.error('Error, cannot send message');
        }
    }

    const handleDisconnect = () => {
        if(ws.current){
            ws.current.close();
            ws.current = null;
            setConnected(false);
        }
    }

    useEffect(() => {
        return (() => {
            if(ws.current){
                ws.current.close();
                ws.current = null;
            }
        })
    }, [])
    

    return (
    <div className="flex flex-col items-center gap-4 p-4 text-white">
      <h1 className="text-4xl font-bold">Simple Broadcast Chat App</h1>

      {!connected ? (
        <button
          onClick={handleConnect}
          className="bg-gray-100 text-black py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-400"
        >
          Connect
        </button>
      ) : (
        <>
          <div className="flex gap-2">
            <input
              className="text-white px-2 py-1 rounded-md"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
            <button
              onClick={handleDisconnect}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Disconnect
            </button>
          </div>

          <div className="mt-4 bg-gray-800 p-4 rounded-lg w-[400px] h-[300px] overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-400 text-center">No messages yet</p>
            ) : (
              messages.map((msg, idx) => (
                <p key={idx} className="text-sm">
                  {msg}
                </p>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );

}