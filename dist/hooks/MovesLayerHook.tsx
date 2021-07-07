import { useCallback, useContext, useEffect, useState } from 'react';
import { MovesLayer } from 'harmoware-vis';
import { HarmowareVisContext } from '../provider/HarmowareProvider';


interface Props {
    data: any
}
export const useMovesLayer = (props: Props) => {
    const [data, setData] = useState<any | null>(props.data)
    const { props: harmowareProps } = useContext(HarmowareVisContext);

    useEffect(() => {
    }, [])

    const setMovesLayer = useCallback(() => {
        return (
            new MovesLayer({
                movedData: data,
                routePaths: harmowareProps.routePaths,
                movesbase: harmowareProps.movesbase,
                clickedObject: harmowareProps.clickedObject,
                actions: harmowareProps.actions
            })
        )
    }, [data])

    return { "setMovesLayer": setMovesLayer }
}
