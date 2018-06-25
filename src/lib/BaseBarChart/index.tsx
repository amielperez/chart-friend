/// <reference path="./types.d.ts"/>

import * as React from 'react';
import * as _ from 'lodash';

const STYLE_KEYS: string[] = [
    'x', 'y', 'height', 'width', 'fill'
];

const BaseBarChart: React.SFC<BaseBarChart.Props> = (props) => {
    var dimensions = {
        height: props.height,
        width: props.width,
    };

    var styles = Object.assign({}, dimensions);
    var componentBody = props.
        bars(props.data, dimensions).
            map((barProps: BaseBarChart.BarProps) => {
                var styles = _.pick(barProps, ...STYLE_KEYS);
                return (
                    <rect key={barProps.data.id} style={styles}></rect>
                );
            })
        

    return props.unwrapped
        ? <React.Fragment>{componentBody}</React.Fragment>
        : <svg style={styles}>{componentBody}</svg>;
}

BaseBarChart.defaultProps = {
    unwrapped: false,
}

export default BaseBarChart;

