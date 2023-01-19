import React, { useState, useEffect } from 'react'
import { getData } from '../helpers/getData';

export const useFetchTypePlans = () => {
    const [state, setState] = useState({
        dataTypePlans: []
    }
    )
    useEffect(() => {
        getData('getTipoPlanes')
            .then((response) => {
                setState({
                    dataTypePlans: response
                })
            });
        
    }, [])

    return state
}