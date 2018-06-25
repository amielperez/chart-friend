/// <reference path="../BaseBarChart/types.d.ts" />
/// <reference path="../common/types.d.ts" />

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import barThicknessFactor from './barThicknessFactor';

const verticalMutatorFactory: BaseBarChart.BarStylerFactory = 
    (data: BaseBarChart.DataPoint[], chartProps: BarChart.Props): BaseBarChart.BarStyler => {
        var xScaleFn = scaleLinear()
            .domain([0, max(data.map((d: BaseBarChart.DataPoint) => d.value))])
            .range([0, chartProps.width]);

        var yScaleFn = scaleBand()
            .domain(data.map((d: BaseBarChart.DataPoint) => d.id))
            .range([0, chartProps.height]);
        
        return (dataPoint: BaseBarChart.DataPoint, currentStyle: BaseBarChart.BarStyle) => {
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
