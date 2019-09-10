import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as ReactDOM from "react-dom";
import { Tab } from "./components/Tabs/Tab";
import { TabButtons } from "./components/Tabs/TabButtons";
import {TabButton2} from "./components/Tabs/TabButton";

const CountContext = React.createContext();

function App() {
  return (
    <div>
      <Tab />
      <TabButtons amount={3} />
    </div>
  );
}

export default App;
