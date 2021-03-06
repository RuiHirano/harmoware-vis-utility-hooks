import './App.css';
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