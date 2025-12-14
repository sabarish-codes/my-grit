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

// first component code and return is executed
// then use effect runs
// useEffect runs after 10 ms for this code

// 2 phases: Render and Commit
// Render phase: calculate ui, update state,props etc (Pure code), -> then creates a virtual dom tree
//               if re-render, creates a new virtual dom tree then compare old vs new for changes - reconciliation

// Commit phase: first cleanup previous effects
//               apply updates to real dom
//               run useLayoutEffect (synchronously)
//               Browser paints the ui to screen
//               run effects - useEffect (asynchronously)