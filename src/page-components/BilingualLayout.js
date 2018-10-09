import React from 'react';
import i18n from '../i18n/i18n';
import {I18n, I18nextProvider} from 'react-i18next';
import PropTypes from 'prop-types';

class BilingualLayout extends React.Component {

  render() {
    return(
      <I18nextProvider i18n={ i18n }>
        <I18n ns={["translation"]}>
          {
            (t, {i18n}) => {
              const { children } = this.props;

              const ChildrenWithTranslation = React.Children.map(children, (child) =>
                React.cloneElement(child, {t : t, i18n: i18n})
              );
              return(
                ChildrenWithTranslation
              );
            }
          }
        </I18n>
      </I18nextProvider>
    );
  }

}

BilingualLayout.propTypes = {
  ns: PropTypes.array
};

BilingualLayout.defaultProps  = {
  ns: PropTypes.array
};



export default BilingualLayout;