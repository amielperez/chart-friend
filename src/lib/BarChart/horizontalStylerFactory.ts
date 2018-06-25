/// <reference path="../BaseBarChart/types.d.ts" />
/// <reference path="../common/types.d.ts" />

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import barThicknessFactor from './barThicknessFactor';

const horizontalMutatorFactory: BaseBarChart.BarStylerFactory = 
    (data: BaseBarChart.DataPoint[], chartProps: BarChart.Props): BaseBarChart.BarStyler => {
        var yScaleFn = scaleLinear()
            .domain([0, max(data.map((d: BaseBarChart.DataPoint) => d.value))])
            .range([0, chartProps.height]);

        var xScaleFn = scaleBand()
            .domain(data.map((d: BaseBarChart.DataPoint) => d.id))
            .range([0, chartProps.width]);

        return (dataPoint: BaseBarChart.DataPoint, currentStyle: BaseBarChart.BarStyle) => {
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
