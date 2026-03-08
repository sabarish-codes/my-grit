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