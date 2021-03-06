# Harmoware Vis Utility Hooks
Harmoware-Vis utility for react hooks.
This is wrapper library of HarmowareVIS(https://github.com/Harmoware/Harmoware-VIS/tree/master).

![image](https://user-images.githubusercontent.com/43264434/124740837-1ce6c780-df56-11eb-8e11-ec79c96ac10f.png)

## HarmowareVis Document
Please see here.
https://harmoware-vis.gitbook.io/harmoware-vis-documents/

# Getting Started

## 1. Install
```
$ yarn add harmoware-vis-utility-hooks
$ npm install harmoware-vis-utility-hooks
```

## 2. Connect Provider to HarmowareVis

| Name  |  Description                                          |
| ---------- |  ---------------------------------------------------- |
| HarmowareVisProvider |  The provider for HarmowareVis redux connection. |

### Example
App.tsx
```
import { HarmowareVisProvider } from 'harmoware-vis-utility-hooks'
import { HarmowareVisComponent } from './HarmowareVis';

function App() {
  return (
    <HarmowareVisProvider>
      <HarmowareVisComponent />
    </HarmowareVisProvider>
  );
}

export default App;
```

## 3. Use custom hooks

| Name  | Input    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| useHarmowareVis | {mapbox_token: string,viewport: Viewport, layers: Layer[]} | For HarmowareVis setting and rendeing |
| useDepotsLayer  | {data: DepotsData} | For depots point rendering  |
| useLineMapLayer  | {data: LineMapData} |  For line map rendering  |
| useMovesLayer  | {data: MovedData} | For moves data rendering  |


### Example

HarmowareVis.tsx
```
import React, { useContext } from 'react';
import { useLineMapLayer, useHarmowareVis, useMovesLayer, useDepotsLayer } from 'harmoware-vis-utility-hooks'
const MAPBOX_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'


export const HarmowareVisComponent: React.FC = () => {

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
        "elevation": 10, // 3-D object height
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
