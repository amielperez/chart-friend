/// <reference path="./types.d.ts" />

import * as React from 'react';
import BaseBarChart from '../BaseBarChart';
import generateWithStylers from '../BaseBarChart/generateWithStylers';
import horizontalStylerFactory from './horizontalStylerFactory';
import verticalStylerFactory from './verticalStylerFactory';
import colorStylerFactory from './colorStylerFactory';

const SimpleBarChart: React.SFC<SimpleBarChart.Props> = (props: SimpleBarChart.Props) => {
    var stylerFactories: BaseBarChart.BarPropsMakerFactory[] = [];
    var barGenerator: BaseBarChart.BarGenerator;
    var barGeneratorProxy: BaseBarChart.BarGenerator;

    stylerFactories.push(props.orientation === 'horizontal' ? horizontalStylerFactory : verticalStylerFactory);
    stylerFactories.push(colorStylerFactory);
    barGenerator = generateWithStylers(...stylerFactories)
    barGeneratorProxy = () => barGenerator(props.data, props);

    var innerProps = Object.assign({}, props, { bars: barGeneratorProxy, unwrapped: true });
    var componentBody = <BaseBarChart {...innerProps}>
                        </BaseBarChart>

    return props.unwrapped
        ? <React.Fragment>{componentBody}</React.Fragment>
        : <svg style={{height: props.height, width: props.width}}>{componentBody}</svg>;
}

SimpleBarChart.defaultProps = {
    orientation: 'horizontal',
    colorScale: 'grays',
    barThickness: 'normal',
    unwrapped: false,
};

export default SimpleBarChart;
