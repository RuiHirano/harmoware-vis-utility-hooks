import { useCallback, useEffect, useState } from 'react';
import { DepotsLayer } from 'harmoware-vis';


interface Props {
    data: any
}
export const useDepotsLayer = (props: Props) => {
    const [data, setData] = useState<any | null>(props.data)

    useEffect(() => {
    }, [])

    const setDepotsLayer = useCallback(() => {
        return (
            new DepotsLayer({
                depotsData: data,
            })
        )
    }, [data])

    return { "setDepotsLayer": setDepotsLayer }
}
