import React, { useState, useEffect } from 'react'
import { getData } from '../helpers/getData';

export const useFetchAditionalPlan = () => {
    const [state, setState] = useState({
        dataAditional: []
    }
    )
    useEffect(() => {
        getData('getPlanesAdicionales')
            .then((response) => {
                setState({
                    dataAditional: response
                })
            });
        
    }, [])

    return state
}
