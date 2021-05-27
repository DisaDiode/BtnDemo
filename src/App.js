import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import { MapsComponent } from '@syncfusion/ej2-react-maps';
import { Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
// Compoentnes importados 

import MiComponente from './components/MiComponente';

import AlertUsers from './components/AlertUsers';
import ClockTime from './components/ClockTime';
import AlertMap from './components/AlertMap'
//<img src={logo} className="App-logo" alt="logo" />
function App() {

  return (
  
    <div className="App">
      <header className="App-header">
      

     
      <img src={logo} className="App-logo" alt="logo" />
       
      </header>


     
    </div>
  );
  }
export default App;
