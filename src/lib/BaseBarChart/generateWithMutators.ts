/// <reference path="./types.d.ts" />

const generateWithMutators = (...mutatorFactories: BaseBarChart.BarStyleMutatorFactory[]): BaseBarChart.BarGenerator => {
    return (data: BaseBarChart.DataPoint[], ...additionalData: any[]): BaseBarChart.BarStyles[] => {
        return data.map((dataPoint: BaseBarChart.DataPoint) => {
            var initialBarStyle: BaseBarChart.BarStyles = {
                x: 0, y: 0, height: 0, width: 0,
            }
            var mutators: BaseBarChart.BarStyleMutator[] = 
                mutatorFactories.map((_factory) => _factory(data, ...additionalData));

            return mutators.
                reduce((accumulatedStyles: BaseBarChart.BarStyles, mutator: BaseBarChart.BarStyleMutator) => {
                    return mutator(dataPoint, accumulatedStyles)
                }, initialBarStyle);
        })
    }
};

export default generateWithMutators;
