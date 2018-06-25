/// <reference path="./types.d.ts" />

const generateWithStylers = (...propsMakerFactories: BaseBarChart.BarPropsMakerFactory[]): BaseBarChart.BarGenerator => {
    return (data: BaseBarChart.DataPoint[], ...additionalData: any[]): BaseBarChart.BarProps[] => {
        return data.map((dataPoint: BaseBarChart.DataPoint, dataPointOrdinality: number) => {
            var initialBarStyle: BaseBarChart.BarProps = {
                x: 0, y: 0, height: 0, width: 0, data: dataPoint,
            }
            var stylers: BaseBarChart.BarPropsMaker[] = 
                propsMakerFactories.map((factory) => factory(data, ...additionalData));

            return stylers.
                reduce((accumulatedStyles: BaseBarChart.BarProps, styler: BaseBarChart.BarPropsMaker) => {
                    return styler(dataPoint, accumulatedStyles, dataPointOrdinality)
                }, initialBarStyle);
        })
    }
};

export default generateWithStylers;
