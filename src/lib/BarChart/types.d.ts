/// <reference path="../BaseBarChart/types.d.ts" />

declare namespace BarChart {
    interface Props extends BaseBarChart.Props {
        orientation: 'horizontal' | 'vertical',
    }
}