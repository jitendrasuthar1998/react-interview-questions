import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const result = response.json();
                setData(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])


    return { data, loading };
}

export default useFetch