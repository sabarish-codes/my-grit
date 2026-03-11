import {randomUUID} from 'crypto';


const BASE_URL = 'http://localhost:3000/items';
const requestBody = {
    name: 'Monkey D Luffy'
}

async function sendWithoutKey(){
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    const result = await response.json();
    const data = result.data;
    console.log('Without key: ', data);
}

async function sendWithKey(key: string){
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
    console.log('With key: ', data);
}

async function run(){
    console.log('----No idempotency key----');
    await sendWithoutKey();
    await sendWithoutKey();

    const key = randomUUID();

    console.log('----With idempotency key----');
    await sendWithKey(key);
    await sendWithKey(key);
}
run();



