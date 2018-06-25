import ranges from './ranges';
import { scaleQuantize } from 'd3-scale';

const scales = Object.keys(ranges).
    map((rangeKey: string): [string, string[]] => [rangeKey, ranges[rangeKey]]).
    reduce(
        (wipScales: any, currentRangeKvPair: [string, string[]]) => {
                var [rangeName, rangeColors] = currentRangeKvPair;
                wipScales[rangeName] = scaleQuantize<string>().range(rangeColors);
                return wipScales;
        }, {});

export default scales;
