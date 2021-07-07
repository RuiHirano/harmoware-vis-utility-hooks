import { useCallback, useEffect } from 'react';
import { LineMapLayer } from 'harmoware-vis';


interface Props {
    data: any
}
export const useLineMapLayer = (props: Props) => {

    useEffect(() => {
    }, [])

    const setLineMapLayer = useCallback(() => {
        return (
            new LineMapLayer({
                data: props.data,
            })
        )
    }, [props.data])

    return { "setLineMapLayer": setLineMapLayer }
}
