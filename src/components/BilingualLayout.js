import React from 'react';
import {I18n} from 'react-i18next';
import PropTypes from 'prop-types;'

class BilingualLayout extends React.Component {

  render() {
    return(
      <I18n ns={["translation"]}>
        {
          (t, {i18n}) => {
            const { children } = this.props;

            const ChildrenWithTranslation = React.Children.map(children, (child) =>
              React.cloneElement(child, {t : t, i18n: i18n})
            );
            return(ChildrenWithTranslation);
        }
        }
      </I18n>
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