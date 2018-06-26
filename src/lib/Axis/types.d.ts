declare namespace Axis {
    interface Props {
        outerTickSize: number,
        innerTickSize: number,
        length: number,
        orientation: 'horizontal' | 'vertical',
        xOffset?: number,
        yOffset?: number,
        ticks: Tick[],
    }

    interface Tick {
        x: number,
        y: number,
        value: string,
    }

    type TickGenerator = (data: Common.SimpleDataPair[], ...additionalData: any[]) => Tick;
}