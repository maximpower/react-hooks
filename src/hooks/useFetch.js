import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true, error: null})
    
    useEffect(() => {

        setState({
            data: null, 
            error: null,
            loading: true
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            })
    },[url])

    return state;
}
