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