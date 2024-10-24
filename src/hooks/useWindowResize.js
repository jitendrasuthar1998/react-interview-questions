import  { useEffect, useState } from 'react'

const useWindowResize = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height:window.innerHeight
    })

    useEffect(()=> {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    function handleResize(){
        setWindowSize({width: window.innerWidth, height: window.innerHeight})
    }

  return windowSize
}

export default useWindowResize