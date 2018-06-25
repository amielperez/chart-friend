import scaleProvider from '../color-scales/scaleProvider';
import { max } from 'd3-array';

const colorStylerFactory = (data: BaseBarChart.DataPoint[], props: Common.HasColorScale): BaseBarChart.BarStyler => {
    var colorScale = scaleProvider(props.colorScale);
    var colorScaleFn = colorScale.domain([0, max(data.map((dataPoint) => dataPoint.value))]);

    return (dataPoint: BaseBarChart.DataPoint, currentStyle: BaseBarChart.BarStyle) => {
        var extraStyle = {
            fill: colorScaleFn(dataPoint.value),
        };

        return Object.assign({}, currentStyle, extraStyle);
    }
}

export default colorStylerFactory;
