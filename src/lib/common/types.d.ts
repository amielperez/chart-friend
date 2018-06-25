declare namespace Common {
    interface SimpleDataPair {
        id: string,
        value: any,
    }

    interface Dimensions {
        width: number,
        height: number,
    }

    interface Position {
        x: number,
        y: number,
    }

    interface HasColorScale {
        colorScale: string, 
    }
}