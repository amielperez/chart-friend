
/// <reference path="../common/types.d.ts" />

declare namespace BaseBarChart {
    interface DataPoint {
        id: string,
        value: number,
    }
    
    interface BarStyles extends Common.Dimensions, Common.Position {
        fill?: string,
    }

    interface Props extends Common.Dimensions {
        data: DataPoint[],
        barGenerator: BarGenerator,
    }

    type BarGenerator = (data: DataPoint[], ...additionalData: any[]) => BarStyles[];
    type BarStyleMutator = (dataPoint: DataPoint, currentStyles: BarStyles | {}) => BarStyles;
    type BarStyleMutatorFactory = (data: DataPoint[], ...additionalData: any[]) => BarStyleMutator;
}
