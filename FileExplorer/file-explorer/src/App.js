import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder';
import {data} from "./utils/data" ; 

function App() {
  return (
    <div>
       <Folder data={data}/>
    </div>
  );
}

export default App;
