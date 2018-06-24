/// <reference path="../BaseBarChart/types.d.ts" />
/// <reference path="../common/types.d.ts" />

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';

const horizontalMutatorFactory: BaseBarChart.BarStyleMutatorFactory = 
    (data: BaseBarChart.DataPoint[], chartDimensions: Common.Dimensions): BaseBarChart.BarStyleMutator => {
        var yScaleFn = scaleLinear()
            .domain([0, max(data.map((d: BaseBarChart.DataPoint) => d.value))])
            .range([0, chartDimensions.height]);

        var xScaleFn = scaleBand()
            .domain(data.map((d: BaseBarChart.DataPoint) => d.id))
            .range([0, chartDimensions.width]);
        
        return function (dataPoint: BaseBarChart.DataPoint, currentStyles: BaseBarChart.BarStyles) {
            var extraStyles = {
                x: xScaleFn(dataPoint.id),
                y: chartDimensions.height - yScaleFn(dataPoint.value),
                height: yScaleFn(dataPoint.value),
                width: xScaleFn.bandwidth(),
            };

            return Object.assign(currentStyles, extraStyles);
        }
    }

export default horizontalMutatorFactory;
