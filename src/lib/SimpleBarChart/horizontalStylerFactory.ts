/// <reference path="../BaseBarChart/types.d.ts" />
/// <reference path="../common/types.d.ts" />

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import barThicknessFactor from './barThicknessFactor';
import scaler from './scaler';

const horizontalMutatorFactory: BaseBarChart.BarPropsMakerFactory = 
    (data: BaseBarChart.DataPoint[], chartProps: SimpleBarChart.Props): BaseBarChart.BarPropsMaker => {
        var { xScaleFn, yScaleFn } = scaler(data, chartProps, chartProps.orientation);

        return (dataPoint: BaseBarChart.DataPoint, currentStyle: BaseBarChart.BarProps) => {
            var extraStyle = {
                x: xScaleFn(dataPoint.id),
                y: chartProps.height - yScaleFn(dataPoint.value),
                height: yScaleFn(dataPoint.value),
                width: xScaleFn.bandwidth() * barThicknessFactor(chartProps.barThickness),
            };

            return Object.assign({}, currentStyle, extraStyle);
        }
    }

export default horizontalMutatorFactory;
