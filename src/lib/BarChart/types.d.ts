/// <reference path="../BaseBarChart/types.d.ts" />

declare namespace BarChart {
    interface Props extends BaseBarChart.Props, Common.HasColorScale {
        barThickness: BaseBarChart.BarThickness,
        orientation: 'horizontal' | 'vertical',
    }
}