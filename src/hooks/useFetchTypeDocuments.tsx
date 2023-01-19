import React, { useState, useEffect } from 'react'
import { getData } from '../helpers/getData';

export const useFetchTypeDocuments = () => {
    const [state, setState] = useState({
        dataDocumentos: []
    }
    )
    useEffect(() => {
        getData('getTipoDocumento')
            .then((response) => {
                setState({
                    dataDocumentos: response
                })
            });
        
    }, [])

    return state
}
