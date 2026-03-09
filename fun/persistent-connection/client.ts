import net from 'net';
import type {Socket} from 'net';

type MyClient = Socket & {id: number};

let clientCounter = 0;

const client = net.createConnection({port: 3000});
const myClient = client as MyClient;

myClient.id = ++clientCounter;

client.on('data', (data: Buffer) => {
    console.log(`Response from server: `, data.toString());
})

client.on('end', () => {
    console.log(`Server stopped sending for Client ${myClient.id}`);
})

client.on('close', () => {
    console.log(`Socket closed for Client ${myClient.id}`);
})

client.on('error', (err) => {
    console.log(`Error for Client ${myClient.id}: `, err.message);
})

function sendRequest(client: MyClient, message: string){
    client.write(message);
    console.log(`${message} send by Client ${myClient.id}`);
}

function closeConnection(client: MyClient){
    client.end();
    console.log(`Socket closing initiated for Client ${client.id}`);
}

sendRequest(myClient, 'Luffy');
sendRequest(myClient, 'Zoro');
sendRequest(myClient, 'Sanji');

closeConnection(myClient);

/*
Logs: 

Luffy send by Client 1
Zoro send by Client 1
Sanji send by Client 1
Socket closing initiated for Client 1
Response from server:  LuffyZoroSanji
Server stopped sending for Client 1
Socket closed for Client 1
*/