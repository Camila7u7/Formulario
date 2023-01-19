import React, { useState, useEffect } from 'react'
import { getData } from '../helpers/getData';

export const useFetchBranch = () => {
    const [state, setState] = useState({
        dataBranch: []
    }
    )
    useEffect(() => {
        getData('getMarcas')
            .then((response) => {
                setState({
                    dataBranch: response
                })
            });
        
    }, [])

    return state
}
