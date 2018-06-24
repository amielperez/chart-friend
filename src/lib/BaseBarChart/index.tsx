/// <reference path="./types.d.ts"/>

import * as React from 'react';

const BaseBarChart: React.SFC<BaseBarChart.Props> = (props) => {
    var dimensions = {
        height: props.height,
        width: props.width,
    };

    var styles = Object.assign({}, dimensions);

    return <svg style={styles}>
        {
            props.
                barGenerator(props.data, dimensions).
                map((barStyles: BaseBarChart.BarStyle) => {
                    return (
                        <rect style={barStyles}></rect>
                    );
                })
        }
    </svg>
}

export default BaseBarChart;

