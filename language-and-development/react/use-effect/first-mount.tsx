import { useEffect } from "react";


export const FirstMount = () => {
    console.log('First mount render: ', Date.now().toLocaleString());

    useEffect(() => {
        console.log('Inside effect: ', Date.now().toLocaleString());
    }, []);

    return <div>
        First Mount
    </div>
}

// first component code and return is executed, then it is commited -> virtual dom -> real dom
// then use effect runs
// useEffect runs after 10 ms for this code