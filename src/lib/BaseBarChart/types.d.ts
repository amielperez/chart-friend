
/// <reference path="../common/types.d.ts" />

declare namespace BaseBarChart {
    interface DataPoint extends Common.SimpleDataPair {
        value: number,
    }
    
    interface BarProps
        extends Common.Dimensions, Common.Position {
        fill?: string,
        data: DataPoint,
    }

    interface Props extends Common.Dimensions {
        data: DataPoint[],
        bars: BarGenerator,
        unwrapped?: boolean,
    }

    type BarGenerator = (data?: DataPoint[], ...additionalData: any[]) => BarProps[];
    type BarPropsMaker = (dataPoint: DataPoint, currentStyle: BarProps, dataPointOrdinality?: number) => BarProps;
    type BarPropsMakerFactory = (data: DataPoint[], ...additionalData: any[]) => BarPropsMaker;

    type BarThickness = 'thinnest' | 'thinner' | 'normal';
}
