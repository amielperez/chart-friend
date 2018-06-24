import * as React from 'react';
import BaseBarChart from '../BaseBarChart';
import generateWithMutators from '../BaseBarChart/generateWithMutators';
import horizontalMutatorFactory from './horizontalMutatorFactory';
import verticalMutatorFactory from './verticalMutatorFactory';

const BarChart: React.SFC<BarChart.Props> = (props) => {
    var mutatorFactories: BaseBarChart.BarStyleMutatorFactory[] = [];
    mutatorFactories.push(props.orientation === 'horizontal' ? horizontalMutatorFactory : verticalMutatorFactory);
    
    var innerProps = Object.assign(props, { barGenerator: generateWithMutators(...mutatorFactories) });

    return (
        <BaseBarChart {...innerProps}>
        </BaseBarChart>
    )
}

export default BarChart;
