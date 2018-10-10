import React from 'react';

class TestLanguageToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnglish: (props.i18n.language === "en") ? true : false 
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(i18n) {
    i18n.changeLanguage(this.state.isEnglish ? "fr" : "en");
    this.setState(prevState => ({
      isEnglish: !prevState.isEnglish
    }));
  }

  render() {
    const { i18n } = this.props;
    return(
      <button onClick={() => this.toggle(i18n)}>change lng</button>
    );
  }
}

export default TestLanguageToggle;