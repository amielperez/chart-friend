
/// <reference path="../common/types.d.ts" />

declare namespace BaseBarChart {
    interface DataPoint {
        id: string,
        value: number,
    }
    
    interface BarStyle
        extends Common.Dimensions, Common.Position {
        fill?: string,
    }

    interface Props extends Common.Dimensions {
        data: DataPoint[],
        barGenerator: BarGenerator & BarGeneratorProxy,
    }

    type BarGenerator = (data: DataPoint[], ...additionalData: any[]) => BarStyle[];
    type BarGeneratorProxy = () => BarStyle[];
    type BarStyler = (dataPoint: DataPoint, currentStyle: BarStyle) => BarStyle;
    type BarStylerFactory = (data: DataPoint[], ...additionalData: any[]) => BarStyler;
}
