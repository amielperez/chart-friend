/// <reference path="./types.d.ts" />

const generateWithStylers = (...stylerFactories: BaseBarChart.BarStylerFactory[]): BaseBarChart.BarGenerator => {
    return (data: BaseBarChart.DataPoint[], ...additionalData: any[]): BaseBarChart.BarStyle[] => {
        return data.map((dataPoint: BaseBarChart.DataPoint) => {
            var initialBarStyle: BaseBarChart.BarStyle = {
                x: 0, y: 0, height: 0, width: 0,
            }
            var stylers: BaseBarChart.BarStyler[] = 
                stylerFactories.map((factory) => factory(data, ...additionalData));

            return stylers.
                reduce((accumulatedStyles: BaseBarChart.BarStyle, styler: BaseBarChart.BarStyler) => {
                    return styler(dataPoint, accumulatedStyles)
                }, initialBarStyle);
        })
    }
};

export default generateWithStylers;
