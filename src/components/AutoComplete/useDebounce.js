import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=> {
        const id = setTimeout(()=> {
            console.log("starting new timeout");

            setDebouncedValue(value);
        }, delay)

        return () => {
            console.log("clearing timeout");
            clearTimeout(id);
        }
    },[value, delay]);

    return debouncedValue;
}

export default useDebounce;