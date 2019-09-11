import React from 'react';
import './App.css';
import './assets/hamburgers.min.css';

import {Tabs} from "./components/Tabs/Tabs";
import {SliderMenu} from "./components/SliderMenu";

const CountContext = React.createContext();

function App() {
  return (

          <div>
              <div className="bg"></div>

              <Tabs number={3}/>

              <SliderMenu/>
          </div>

  );
}

export default App;
