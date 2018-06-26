/// <reference path="./types.d.ts" />
import { scaleLinear, ScaleLinear, scaleBand, ScaleBand } from 'd3-scale';

const scaler = (dataPoints: BaseBarChart.DataPoint[], dimensions: Common.Dimensions, orientation: string): { [key: string]: any } => (
    orientation === 'horizontal'
        ? {
            xScaleFn: <ScaleBand<string>>scaleBand()
                .domain(dataPoints.map((d: BaseBarChart.DataPoint) => d.id))
                .range([0, dimensions.width]),
            yScaleFn: <ScaleLinear<number, number>>scaleLinear()
                .domain([0, Math.max(...dataPoints.map((d: BaseBarChart.DataPoint) => d.value))])
                .range([0, dimensions.height]),
        }
        : {
            xScaleFn: <ScaleLinear<number, number>>scaleLinear()
                .domain([0, Math.max(...dataPoints.map((d: BaseBarChart.DataPoint) => d.value))])
                .range([0, dimensions.width]),
            yScaleFn: <ScaleBand<string>>scaleBand()
                .domain(dataPoints.map((d: BaseBarChart.DataPoint) => d.id))
                .range([0, dimensions.height])
        }
);

export default scaler;
