/// <reference path="./types.d.ts" />

import * as React from 'react';

const pathExpr = (props: Axis.Props): string => (
    props.orientation === 'horizontal'
        ? []
            .concat(`M0,${props.outerTickSize}`)
            .concat(`V0`)
            .concat(`H${props.length}`)
            .concat(`V${props.outerTickSize}`)
            .join('')
        : []
            .concat(`M0,0`)
            .concat(`H${props.outerTickSize}`)
            .concat(`V${props.length}`)
            .concat(`H0`)
            .join('')
);

const Axis: React.SFC<Axis.Props> = (props: Axis.Props) => {
    var axisXOffset = props.xOffset || 0;
    var axisYOffset = props.yOffset || 0;

    return (
        <g
            fill={'none'}
            fontSize={10}
            textAnchor={'middle'}
            transform={`translate(${axisXOffset}, ${axisYOffset})`}>
            <path
                stroke={'#000'}
                d={pathExpr(props)} />
            {
                props.ticks &&
                    props.ticks.map((tick: Axis.Tick) => {
                        var lineProps = {
                            x1: tick.x,
                            y1: tick.y,
                            x2: props.orientation === 'horizontal' ? tick.x : 0,
                            y2: props.orientation === 'horizontal' ? props.innerTickSize : tick.y,
                            stroke: '#000',
                        };
                        

                        return (
                            <g key={tick.value} transform={`translate(${tick.x}, ${tick.y})`}>
                                <line {...lineProps} />
                            </g>
                        );
                    })
            }
        </g>
    );
}

export default Axis;
