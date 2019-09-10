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

          <div className="tabs">
              <input type="radio" name="tabs" id="tabone" checked="checked"/>
                  <label htmlFor="tabone">Tab One</label>
                  <div className="tab">
                      <h1>Tab One Content</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>

                  <input type="radio" name="tabs" id="tabtwo"/>
                      <label htmlFor="tabtwo">Tab Two</label>
                      <div className="tab">
                          <h1>Tab Two Content</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                              est laborum.</p>
                      </div>

                      <input type="radio" name="tabs" id="tabthree"/>
                          <label htmlFor="tabthree">Tab Three</label>
                          <div className="tab">
                              <h1>Tab Three Content</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
          </div>

  );
}

export default App;
