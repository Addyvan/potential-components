import React from 'react';

class TestComponent extends React.Component {
  render() {
    const {t} = this.props;
    return(
      <div>
        {t("title")}
      </div>
    );
    
  }
}

export default TestComponent;