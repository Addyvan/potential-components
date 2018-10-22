import React, { Component } from 'react';
import BilingualLayout from './page-components/BilingualLayout';
import TestComponent from "./test/TestComponent";
import TestLanguageToggle from "./test/TestLanguageToggle";
import BarGraph from "./components/BarGraph"

import {
  Button
} from './aurora';

class App extends Component {
  render() {
    return (
        <BilingualLayout>
          <TestComponent />
          <TestLanguageToggle />
          <Button color="primary">Yo waddup</Button>
          <BarGraph></BarGraph>
        </BilingualLayout>
    );
  }
}

export default App;
