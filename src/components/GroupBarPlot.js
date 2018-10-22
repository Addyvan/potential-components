import React from 'react';
import Plot from 'react-plotly.js';

class GroupBarPlot extends React.Component {
    constructor(props) {
        super(props); //props will be xData, yData, type, xAxis, yAxis, title
    }
    render() {
        var trace1 = {
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            name: 'SF Zoo',
            type: 'bar'
        };
          
        var trace2 = {
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [12, 18, 29],
            name: 'LA Zoo',
            type: 'bar'
        };

        return (
            <Plot
                data={[trace1, trace2]}
                layout={ {autosize: true, title: 'A Grouped Bar Plot'} }
                config={ {displayModeBar: false} }
                style={ {"width": "100%"} }
            />
        );
    }
}

const GroupBarPlotSource = `
import React from 'react';
import Plot from 'react-plotly.js';
class GroupBarPlot extends React.Component {
    render() {
        var trace1 = {
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            name: 'SF Zoo',
            type: 'bar'
        };
          
        var trace2 = {
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [12, 18, 29],
            name: 'LA Zoo',
            type: 'bar'
        };
        return (
            <Plot
                data={[trace1, trace2]}
                layout={ {autosize: true, title: 'A Grouped Bar Plot'} }
                config={ {displayModeBar: false} }
                style={ {"width": "100%"} }
            />
        );
    }
}
export default GroupBarPlot;
`

export { GroupBarPlot, GroupBarPlotSource };