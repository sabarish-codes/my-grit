import {WebSocketServer, WebSocket} from 'ws';

interface MyWebSocket extends WebSocket{
	clientName?: string
}

const wss = new WebSocketServer({port: 8080});

let userCount = 0;
const map = new Map<number, MyWebSocket[]>(); // 1: [socket1, socket2]

wss.on("connection", (socket) => {
	userCount++;
	console.log("Total users: ", userCount);
	socket.send("Success");

	socket.on("message", (message) => {
		
		const parsedMessage = JSON.parse(message.toString()); // parsing the message, string -> json

		// socket client joining a room
		if(parsedMessage.type === 'join'){
			const roomId = parsedMessage.payload.roomId;
			const sockets = map.get(roomId) ?? [];
			const mySocket = socket as MyWebSocket;
			mySocket.clientName = parsedMessage.payload.clientName;
			sockets.push(mySocket);
			map.set(roomId, sockets);
			socket.send("Success");
			console.log('Client: ', mySocket.clientName, 'joined Room: ', roomId);
		}

		// socket client broadcasting a message to all clients in same room
		if(parsedMessage.type === 'broadcast'){
			for(const [roomId, sockets] of map.entries()){
				if(sockets.includes(socket)){
					const mySocket = socket as MyWebSocket;
					const senderName = mySocket.clientName;
					sockets.forEach((s) => {
						if(s !== socket){
							s.send(senderName+": "+parsedMessage.payload.message);
						}
					
					})
					break;
				}
			}
			socket.send("Success");
		}
	})

	socket.on("close", () => {
		for(const [roomId, sockets] of map.entries()){
			const index = sockets.indexOf(socket);
			if(index !== -1){
				sockets.splice(index, 1);
				map.set(roomId, sockets);
				break;
			}
		}
	})

})


