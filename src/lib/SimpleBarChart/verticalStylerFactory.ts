/// <reference path="../BaseBarChart/types.d.ts" />
/// <reference path="../common/types.d.ts" />

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import barThicknessFactor from './barThicknessFactor';
import scaler from './scaler';

const verticalMutatorFactory: BaseBarChart.BarPropsMakerFactory = 
    (data: BaseBarChart.DataPoint[], chartProps: SimpleBarChart.Props): BaseBarChart.BarPropsMaker => {
        var { xScaleFn, yScaleFn } = scaler(data, chartProps, chartProps.orientation);
        
        return (dataPoint: BaseBarChart.DataPoint, currentStyle: BaseBarChart.BarProps) => {
            var extraStyle = {
                x: 0,
                y: yScaleFn(dataPoint.id),
                height: yScaleFn.bandwidth() * barThicknessFactor(chartProps.barThickness),
                width: xScaleFn(dataPoint.value),
            };

            return Object.assign({}, currentStyle, extraStyle);
        }
    }

export default verticalMutatorFactory;
