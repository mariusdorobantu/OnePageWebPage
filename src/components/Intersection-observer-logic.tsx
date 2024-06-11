import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ targetNumber, duration }) => {
    const [count, setCount] = useState(0);
    const [startCount, setStartCount] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (observer && observer.unobserve) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!startCount) return;

        const increments = Math.ceil(targetNumber / (duration / 1000));
        const intervalTime = 100 / increments;

        let currentCount = 0;

        const countInterval = setInterval(() => {
            if (currentCount >= targetNumber) {
                clearInterval(countInterval);
            } else {
                setCount(currentCount++);
            }
        }, intervalTime);

        return () => clearInterval(countInterval);
    }, [startCount]);

    return <div ref={elementRef} className="funny--skills--header">{count}</div>;
};

export default CountUp;
