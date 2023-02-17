import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-blue-900 text-white p-5">
            <div>Count = {count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}