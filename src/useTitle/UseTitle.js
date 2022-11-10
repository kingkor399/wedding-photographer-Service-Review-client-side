import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Dream Photography`;
    },[title])
}

export default useTitle