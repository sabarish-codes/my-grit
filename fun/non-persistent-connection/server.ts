import net from 'net';
import type {Socket} from 'net';

type MySocket = Socket & {id: number}

let socketCounter = 0;

const server = net.createServer((socket: Socket) => {

    const mySocket = socket as MySocket;
    
    mySocket.id = ++socketCounter;
    console.log('Client connection successful');
    console.log('Socket: ', mySocket.id);

    mySocket.on('data', (data: Buffer) => {
        console.log('Message from client: ', data.toString());
        mySocket.write(data.toString());
        mySocket.end();
    })

    mySocket.on('end', () => {
        console.log(`Socket ${mySocket.id} stops receiving data`);
    })

    mySocket.on('close', (hadError: boolean) => {
        console.log(`Socket ${mySocket.id} closed`, hadError ? 'due to error' : '');
    })

    mySocket.on('error', (err) => {
        console.log('Error: ', err.message);
    })

})

server.listen(3000, () => {
    console.log('Server listening at port 3000');
})

/*
Logs:

Server listening at port 3000
Client connection successful
Socket:  1
Client connection successful
Socket:  2
Client connection successful
Socket:  3
Client connection successful
Socket:  4
Client connection successful
Socket:  5
Message from client:  Luffy
Socket 1 stops receiving data
Socket 1 closed
Message from client:  Zoro
Message from client:  Nami
Message from client:  Sanji
Message from client:  Robin
Socket 2 stops receiving data
Socket 2 closed
Socket 3 stops receiving data
Socket 4 stops receiving data
Socket 5 stops receiving data
Socket 5 closed
Socket 4 closed
Socket 3 closed
*/