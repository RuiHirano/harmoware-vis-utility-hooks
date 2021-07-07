# Harmoware Vis Utility Hooks
Harmoware-Vis utility by react hooks.


## Example

App.tsx
```
import './App.css';
import { HarmowareVisProvider } from './provider/HarmowareProvider';
import { HarmowareVisComponent } from './views';


function App() {
  return (

    <HarmowareVisProvider>
      <HarmowareVisComponent />
    </HarmowareVisProvider>
  );
}

export default App;
```

HarmowareVis.tsx
```

import React, { useContext } from 'react';
import { useLineMapLayer } from '../hooks/LineMapLayerHook';
import { useDepotsLayer } from '../hooks/DepotsLayerHook';
import { useMovesLayer } from '../hooks/MovesLayerHook';
import { useHarmowareVis } from '../hooks/HarmowareVisHook';
import { HarmowareVisContext } from '../provider/HarmowareProvider';
const MAPBOX_TOKEN = 'pxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxifQ.xxxxxxxxxxxawxxxxA'

const HarmowareVisComponent: React.FC = () => {
  const { props: harmowareProps } = useContext(HarmowareVisContext);
  console.log("proptest", harmowareProps)

  const { setLineMapLayer } = useLineMapLayer({
    data: [  // line source & target
      {
        "sourcePosition": [136.978052, 35.152912, 0], // line start position (long,Lati,height)
        "targetPosition": [136.981445, 35.157597, 0], // line end position (long,Lati,height)
      },
      {
        "sourcePosition": [136.979052, 35.152912, 0], // line start position (long,Lati,height)
        "targetPosition": [136.981445, 35.157597, 0], // line end position (long,Lati,height)
      },
      {
        "path": [[136.977052, 35.152912, 0], // line path position (long,Lati,height)
        [136.978052, 35.152912, 0]],
        "dash ": [5, 2], // line pattern
      },
      {
        "polygon": [[136.977052, 35.152812, 0], // polygon path position (long,Lati,height)
        [136.976052, 35.152912, 0], [136.975052, 35.152312, 0]],
        "elevation": 100, // 3-D object height
      },
      {
        "coordinates": [[136.977752, 35.152212, 0], // coordinates path position (long,Lati,height)
        [136.977852, 35.152512, 0]],
      },
    ]
  })

  const { setDepotsLayer } = useDepotsLayer({
    data: [  // line source & target
      {
        "position": [136.978052, 35.152912, 0], // line start position (long,Lati,height)
      },
    ]
  })

  const { setMovesLayer } = useMovesLayer({
    data: [],
  })

  const { renderHarmowareVis } = useHarmowareVis({
    mapbox_token: MAPBOX_TOKEN,
    layers: [
      setLineMapLayer(),
      setDepotsLayer(),
      setMovesLayer(),
    ],
    viewport: {
      longitude: 136.9831702,
      latitude: 35.1562909,
      width: window.screen.width,
      height: window.screen.height,
      zoom: 16
    }
  })


  return (
    <div className="App">
      {renderHarmowareVis()}
    </div>
  );
}
```
