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