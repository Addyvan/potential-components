import React from 'react';
import {BasicBarPlot, BasicBarPlotSource} from './BasicBarPlot';
import {GroupBarPlot, GroupBarPlotSource} from './GroupBarPlot';
import CodeBlock from './CodeBlock';
import { Row, Col } from 'reactstrap';
import DataFooter from './DataFooter';

class BarGraph extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <Col md="12">
            <BasicBarPlot 
                title="Graph Title"
                xData={["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]}
                yData={[9, 18, 26, 18,39, 38, 19]}
                type="bar"
                xAxis="Category Axis Title"
                yAxis="Category Axis Title"
                filled = {false}
            />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <CodeBlock html="" react={BasicBarPlotSource} defaultOutput="react" />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <GroupBarPlot />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <CodeBlock html="" react={GroupBarPlotSource} defaultOutput="react" />
          </Col>
        </Row>
        <DataFooter prev='/examples/colors' next=''/>
      </div>
    );
  }
}

export default BarGraph;