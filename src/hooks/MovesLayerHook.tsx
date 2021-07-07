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
                movedData: harmowareProps.movesbase,
                routePaths: harmowareProps.routePaths,
                movesbase: props.data,
                clickedObject: harmowareProps.clickedObject,
                actions: harmowareProps.actions,
                optionVisible: false,
                getRadius: x => 0.5,
                iconChange: false,
            })
        )
    }, [props.data])

    return { "setMovesLayer": setMovesLayer }
}
