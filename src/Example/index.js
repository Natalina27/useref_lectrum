import React, {useRef, useState} from 'react';

export const Example = () => {
    const[count, setCount] = useState(0);
    const counterEl = useRef(null);

    const increment = () => {
        setCount(count + 1);
        console.log('counterEl.current', counterEl.current);
    }

    return (
        <>
            Count: <span ref={counterEl}>{count}</span>
            <button onClick={increment}>+</button>
        </>
    );
};

