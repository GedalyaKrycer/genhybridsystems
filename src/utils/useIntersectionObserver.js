import React, {useEffect, useState, useRef} from 'react';

//Orginal Code: https://dev.to/producthackers/intersection-observer-using-react-49ko

const useIntersectionObserver = options => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callBackFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options);

        if(elementRef.current) observer.observe(elementRef.current);

        return () => {
            if(elementRef.current) observer.unobserve(elementRef.current);
        }
    }, [options, elementRef])

    return [isVisible, elementRef];
}

export default useIntersectionObserver;
