import net from 'net';

let socketCounter = 0;

function sendRequest(message: string){

    const client = net.createConnection({port: 3000}, () => {

        const clientId = ++socketCounter;
        console.log(`Socket ID ${clientId} successful`);

        client.write(message);
        client.end();

        client.on('data', (data: Buffer) => {
            console.log('Response from server: ', data.toString());
        })

        client.on('end', () => {
            console.log(`Socket ID ${clientId} stops receiving data`);
        })

        client.on('close', (hadError: boolean) => {
            console.log(`Connection closed ID ${clientId}`, hadError ? 'due to error' : '');
        })

        client.on('error', (err) => {
            console.log('Error: ', err.message);
        })
    })
}

sendRequest('Luffy');
sendRequest('Zoro');
sendRequest('Sanji');
sendRequest('Nami');
sendRequest('Robin');

/*
Logs:

Luffy send by Client 1
Zoro send by Client 1
Sanji send by Client 1
Socket closing initiated for Client 1
Response from server:  LuffyZoroSanji
Server stopped sending for Client 1
Socket closed for Client 1
PS F:\my-grit\fun> node .\dist\non-persistent-connection\client.js
Socket ID 1 successful
Socket ID 2 successful
Socket ID 3 successful
Socket ID 4 successful
Socket ID 5 successful
Response from server:  Luffy
Socket ID 1 stops receiving data
Connection closed ID 1
Response from server:  Zoro
Response from server:  Nami
Response from server:  Sanji
Response from server:  Robin
Socket ID 2 stops receiving data
Socket ID 3 stops receiving data
Socket ID 4 stops receiving data
Socket ID 5 stops receiving data
Connection closed ID 5 
Connection closed ID 4
Connection closed ID 3
Connection closed ID 2
*/