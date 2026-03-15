import {randomUUID} from 'crypto';


const BASE_URL = 'http://localhost:3000/items';


async function sendWithoutKey(requestBody: {name: string}){
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    const result = await response.json();
    console.log('Data', result.data);
    console.log('Message: ', result.message)
}

async function sendWithKey(key: string, requestBody?: {name: string}){
    const resposne = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': key
        },
        body: JSON.stringify(requestBody)
    })
    const result = await resposne.json();
    const data = result.data;
    console.log('Data: ', result.data);
    console.log('Message: ', result.message);
}

async function run(){

    const requestBody1 = {
        name: 'Monkey D Luffy'
    }
    const requestBody2 = {
        name: 'Roronoa Zoro'
    }
    
    console.log('----No idempotency key----');
    await sendWithoutKey(requestBody1);
    await sendWithoutKey(requestBody1);

    const key = randomUUID();
    

    console.log('----With idempotency key----');
    await sendWithKey(key, requestBody1);
    await sendWithKey(key, requestBody2);
}

async function retrySimulation(){

    const body = {name: 'Gol D Roger'};
    const key = randomUUID();

    console.log('---First Request---');
    await sendWithKey(key, body);

    console.log('---Retry request---');
    await sendWithKey(key, body);

    console.log('---Retry again---');
    setTimeout(() => {
        sendWithKey(key, body);
    }, 1000);
}
retrySimulation()



