/// <reference path="../BaseBarChart/types.d.ts" />
/// <reference path="../common/types.d.ts" />

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';

const verticalMutatorFactory: BaseBarChart.BarStyleMutatorFactory = 
    (data: BaseBarChart.DataPoint[], chartDimensions: Common.Dimensions): BaseBarChart.BarStyleMutator => {
        var xScaleFn = scaleLinear()
            .domain([0, max(data.map((d: BaseBarChart.DataPoint) => d.value))])
            .range([0, chartDimensions.width]);

        var yScaleFn = scaleBand()
            .domain(data.map((d: BaseBarChart.DataPoint) => d.id))
            .range([0, chartDimensions.height]);
        
        return function (dataPoint: BaseBarChart.DataPoint, currentStyles: BaseBarChart.BarStyles) {
            var extraStyles = {
                x: 0,
                y: yScaleFn(dataPoint.id),
                height: yScaleFn.bandwidth(),
                width: xScaleFn(dataPoint.value),
            };

            return Object.assign(currentStyles, extraStyles);
        }
    }

export default verticalMutatorFactory;
