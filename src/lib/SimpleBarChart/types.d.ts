/// <reference path="../BaseBarChart/types.d.ts" />

declare namespace SimpleBarChart {
    interface Props extends BaseBarChart.Props, Common.HasColorScale {
        barThickness: BaseBarChart.BarThickness,
        orientation: 'horizontal' | 'vertical',
    }
}