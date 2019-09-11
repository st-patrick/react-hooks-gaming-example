import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/hamburgers.min.css';

import * as ReactDOM from "react-dom";
import { Tab } from "./components/Tabs/Tab";
import { TabButtons } from "./components/Tabs/TabButtons";
import {TabButton2} from "./components/Tabs/TabButton";
import {Tabs} from "./components/Tabs/Tabs";
import {SliderMenu} from "./components/SliderMenu";

const CountContext = React.createContext();

function App() {
  return (

          <div>
              <div className="bg"></div>

              <Tabs />

              <SliderMenu/>
          </div>

  );
}

export default App;
