import { useCallback, useContext, useEffect } from 'react';
import { HarmoVisLayers, Viewport } from 'harmoware-vis';
import { HarmowareVisContext } from '../provider/HarmowareProvider';


interface Props {
    layers: any[]
    mapbox_token: string
    viewport: Viewport
}
export const useHarmowareVis = (props: Props) => {
    const { layers, mapbox_token, viewport } = props
    const { props: harmowareProps } = useContext(HarmowareVisContext);

    useEffect(() => {

        console.log(process.env);
        if (harmowareProps.actions) {
            harmowareProps.actions.setViewport({
                ...harmowareProps.viewport,
                ...viewport,
            })
            harmowareProps.actions.setSecPerHour(3600);
            harmowareProps.actions.setLeading(2)
            harmowareProps.actions.setTrailing(5)
        }
    }, [])

    const renderHarmowareVis = useCallback(() => {
        return (
            <HarmoVisLayers
                viewport={harmowareProps.viewport} actions={harmowareProps.actions}
                mapboxApiAccessToken={mapbox_token}
                layers={layers}
            />
        )
    }, [layers])

    return { "renderHarmowareVis": renderHarmowareVis }
}
