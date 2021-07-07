import { useCallback, useEffect, useState } from 'react';
import { LineMapLayer } from 'harmoware-vis';


interface Props {
    data: any
}
export const useLineMapLayer = (props: Props) => {
    const [data, setData] = useState<any | null>(props.data)

    useEffect(() => {
    }, [])

    const setLineMapLayer = useCallback(() => {
        return (
            new LineMapLayer({
                data: data,
            })
        )
    }, [data])

    return { "setLineMapLayer": setLineMapLayer }
}
