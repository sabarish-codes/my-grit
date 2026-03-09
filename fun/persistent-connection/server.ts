import net from 'net';
import type {Socket} from 'net';

type MySocket = Socket & {id: number};

let socketCounter = 0;

const server = net.createServer((socket: Socket) => {

    const mySocket = socket as MySocket;
    mySocket.id = ++socketCounter;

    console.log(`Connection successful Client - Socket ${mySocket.id}`);

    mySocket.on('data', (data: Buffer) => {
        console.log('Message from client: ', data.toString());
        mySocket.write(data);
    })

    mySocket.on('end', () => {
        console.log(`Stopped receiving from Socket ${mySocket.id}`);
        mySocket.end();
    })

    mySocket.on('close', () => {
        console.log(`Socket ${mySocket.id} closed`);
    })

    mySocket.on('error', (err) => {
        console.log(`Error in Socket ${mySocket.id}: `, err.message);
    })
})

server.listen(3000, () => {
    console.log('Server listening on PORT 3000');
})