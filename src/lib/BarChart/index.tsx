import * as React from 'react';
import BaseBarChart from '../BaseBarChart';
import generateWithStylers from '../BaseBarChart/generateWithStylers';
import horizontalStylerFactory from './horizontalStylerFactory';
import verticalStylerFactory from './verticalStylerFactory';
import colorStylerFactory from './colorStylerFactory';

const BarChart: React.SFC<BarChart.Props> = (props: BarChart.Props) => {
    var mutatorFactories: BaseBarChart.BarStylerFactory[] = [];
    var barGenerator: BaseBarChart.BarGenerator;
    var barGeneratorProxy: BaseBarChart.BarGeneratorProxy;

    mutatorFactories.push(props.orientation === 'horizontal' ? horizontalStylerFactory : verticalStylerFactory);
    mutatorFactories.push(colorStylerFactory);
    barGenerator = generateWithStylers(...mutatorFactories)
    barGeneratorProxy = () => barGenerator(props.data, props);

    var innerProps = Object.assign(props, { barGenerator: barGeneratorProxy });

    return (
        <BaseBarChart {...innerProps}>
        </BaseBarChart>
    )
}

BarChart.defaultProps = {
    orientation: 'horizontal',
    colorScale: 'cool',
};

export default BarChart;
