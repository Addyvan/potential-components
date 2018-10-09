import React, { Component } from 'react';
import BilingualLayout from './page-components/BilingualLayout';
import TestComponent from "./components/TestComponent";
import TestLanguageToggle from "./components/TestLanguageToggle";

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
        </BilingualLayout>
    );
  }
}

export default App;
