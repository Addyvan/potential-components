import React, { Component } from 'react';
import BilingualLayout from './components/BilingualLayout';
import TestComponent from "./components/TestComponent";
import TestLanguageToggle from "./components/TestLanguageToggle";

class App extends Component {
  render() {
    return (
        <BilingualLayout>
          <TestComponent />
          <TestLanguageToggle />
        </BilingualLayout>
    );
  }
}

export default App;
