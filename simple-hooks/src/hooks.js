import { useState } from "react";

export function useStack() {
    const [stack, setStack] = useState([]);
    const push = (newItem) => {
        setStack([...stack, newItem]);
    };

    const pop = () => {
        const lastItem = stack[stack.length - 1];
        setStack([...stack.slice(0, stack.length - 1)]);
        return lastItem;
    };

    return { stack, push, pop };
}

export function useCounter(start, finish) {
    const [timeCount, setTimeCount] = useState(start);

    // Handel count
    const count = () => {
        if (timeCount === finish) {
            setTimeCount(start);
        } else {
            setTimeCount(timeCount + 1);
        }
    };
    return [timeCount, count];
}
