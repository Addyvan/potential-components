import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import PropTypes from 'prop-types';

class DataFooter extends React.Component {
  render() {
    return(
      <Row style={{"marginTop": "30px"}}>
        <Row>
          <Col md="12">
            <hr className="my-2" />
          </Col>
        </Row>
        <Col md="6" >
          <Button href={this.props.prev} color="primary" className="float-left">Previous</Button>
        </Col>
        <Col md="6" >
          <Button href={this.props.next} color="primary" className="float-right">Next</Button>
        </Col>
      </Row>
    );
  }
}

DataFooter.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string
}

DataFooter.defaultProps = {
  prev: '/examples',
  next: '/examples'
}

export default DataFooter;