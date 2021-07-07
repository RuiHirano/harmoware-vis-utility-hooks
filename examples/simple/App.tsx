import './App.css';
import { HarmowareVisProvider } from '../../src/provider/HarmowareProvider';
import { HarmowareVisComponent } from './HarmowareVis';


function App() {
  return (

    <HarmowareVisProvider>
      <HarmowareVisComponent />
    </HarmowareVisProvider>
  );
}

export default App;