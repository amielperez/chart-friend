import { BarChart } from '../lib/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

var props = {
    height: 400,
    width: 600,
    data: [10, 15, 5, 25, 20].map((i) => ({ id: `${i}`, value: i})),
    orientation: 'horizontal',
}

const Index = (props) => (
    <React.Fragment>
        <div>
            <BarChart {...props} />
        </div>
        <div>
            <BarChart {...Object.assign(props, { orientation: 'vertical'})} />
        </div>
    </React.Fragment>
);

ReactDOM.render(<Index {...props} />, document.getElementById('app'));
