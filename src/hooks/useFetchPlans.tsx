import React, { useState, useEffect } from 'react'
import { getData } from '../helpers/getData';

export const useFetchPlans = (codTipo: number) => {
    const [state, setState] = useState({
        dataPlans: []
    }
    )
    useEffect(() => {
        getData('getPlanes/'+codTipo)
            .then((response) => {
                setState({
                    dataPlans: response
                })
            });
        
    }, [])

    return state
}