import { useCallback, useContext, useEffect } from 'react';
import { MovesLayer } from 'harmoware-vis';
import { HarmowareVisContext } from '../provider/HarmowareProvider';


interface Props {
    data: any
}
export const useMovesLayer = (props: Props) => {
    const { props: harmowareProps } = useContext(HarmowareVisContext);

    useEffect(() => {
    }, [])

    const setMovesLayer = useCallback(() => {
        return (
            new MovesLayer({
                movedData: props.data,
                routePaths: harmowareProps.routePaths,
                movesbase: harmowareProps.movesbase,
                clickedObject: harmowareProps.clickedObject,
                actions: harmowareProps.actions
            })
        )
    }, [props.data])

    return { "setMovesLayer": setMovesLayer }
}
