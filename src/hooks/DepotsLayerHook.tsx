import { useCallback, useEffect } from 'react';
import { DepotsLayer } from 'harmoware-vis';


interface Props {
    data: any
}
export const useDepotsLayer = (props: Props) => {

    useEffect(() => {
    }, [])

    const setDepotsLayer = useCallback(() => {
        return (
            new DepotsLayer({
                depotsData: props.data,
            })
        )
    }, [props.data])

    return { "setDepotsLayer": setDepotsLayer }
}
