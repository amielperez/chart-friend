import scaleProvider from '../color-scales/scaleProvider';
import { max } from 'd3-array';

const colorStylerFactory = (data: BaseBarChart.DataPoint[], props: Common.HasColorScale): BaseBarChart.BarPropsMaker => {
    var colorScale = scaleProvider(props.colorScale);
    var colorScaleFn = colorScale.domain([0, data.length]);

    return (dataPoint: BaseBarChart.DataPoint, currentStyle: BaseBarChart.BarProps, dataPointOrdinality: number) => {
        var extraStyle = {
            fill: colorScaleFn(dataPointOrdinality),
        };

        return Object.assign({}, currentStyle, extraStyle);
    }
}

export default colorStylerFactory;
