import { useEffect } from "react";
import { useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/"
export default function useFetchHook(content) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const handleFetchData = async () => {
            setLoading(true);
            try {
                const data = await fetch(baseURL + content);
                const result = await data.json();
                setData(result)
            } catch (error) {
                console.log("error", error);
            } finally {
                setLoading(false);
            }
        }
        handleFetchData();
    }, [content])

    return { data, loading }
}