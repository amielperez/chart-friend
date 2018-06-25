import { BarChart } from '../lib/index';
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
            <BarChart {...Object.assign({}, props, { height: 250, width: 300 })} />
        </StyledDiv>
        <StyledDiv>
            <BarChart {...Object.assign(props, { orientation: 'vertical', colorScale: 'warm', barThickness: 'thinner' })} />
        </StyledDiv>
    </React.Fragment>
);

ReactDOM.render(<Index {...props} />, document.getElementById('app'));
