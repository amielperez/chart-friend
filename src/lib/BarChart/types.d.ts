/// <reference path="../BaseBarChart/types.d.ts" />

declare namespace BarChart {
    interface Props extends BaseBarChart.Props, Common.HasColorScale {
        orientation: 'horizontal' | 'vertical',
    }
}