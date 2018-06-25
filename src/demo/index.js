import { SimpleBarChart, Axis } from '../lib/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

var props = {
    height: 400,
    width: 600,
    data: [10, 15, 5, 25, 20].map((i) => ({ id: `${i}`, value: i})),
}

var StyledDiv = styled.div`
    margin: 10px;
`;

const Index = (props) => (
    <React.Fragment>
        <StyledDiv>
            <svg style={{ height: 300, width: 300 }}>
                <Axis {...{ length: 300, outerTickSize: 5, innerTickSize: 5, orientation: 'horizontal', yOffset: 251, ticks: [{x: 50, y: 0, value: 'A'}, {x: 100, y: 0, value: 'B'}, {x: 150, y: 0, value: 'C'}] }}/>
                <Axis {...{ length: 251, outerTickSize: 5, innerTickSize: 5, orientation: 'vertical', xOffset: -5 }}/>
                <g transform={'translate(5, 0)'}>
                    <SimpleBarChart {...Object.assign({}, props, { height: 250, width: 300, barThickness: 'thinnest', unwrapped: true })} />
                </g>
            </svg>
        </StyledDiv>
        <StyledDiv>
            <SimpleBarChart {...Object.assign(props, { orientation: 'vertical', colorScale: 'warm', barThickness: 'thinner' })} />
        </StyledDiv>
    </React.Fragment>
);

ReactDOM.render(<Index {...props} />, document.getElementById('app'));
