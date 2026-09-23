import { useState, useEffect } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);
    console.log('Render: ', count);

    useEffect(() => {
        console.log('State-change render: ', count);

        //cleanup function
        return () => console.log('Cleanup function: ', count);
    }, [count]);

    return (
        <button onClick={() => setCount(c => c+1)}>{count}</button>
    )
}

// order of executing for re-render due to state change
// first logic inside component and return thing runs
// then cleanup function inside effect
// then code inside useeffect

// Render:  1
// installHook.js:1 Render:  1
// deps-array.tsx:12 Cleanup function:  0
// deps-array.tsx:9 State-change render:  1
// deps-array.tsx:6 Render:  2
// installHook.js:1 Render:  2
// deps-array.tsx:12 Cleanup function:  1
// deps-array.tsx:9 State-change render:  2
// deps-array.tsx:6 Render:  3
// installHook.js:1 Render:  3
// deps-array.tsx:12 Cleanup function:  2
// deps-array.tsx:9 State-change render:  3