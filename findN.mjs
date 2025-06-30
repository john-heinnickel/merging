import {readFileSync} from "fs";

const data = readFileSync("BigFile.dat").utf8Slice(0).split("\n")
const bounds = [
	99980
];
const step = [
	20
];
const offset = [
	0
];

data[data.length - 1] = undefined;

export function showValuesAtN(n) {
    if (n < 0) {
        return [undefined, data[0]];
    }
    if (n < data.length-1) {
        return [data[n], data[n+1]];
    }
    return [data[(data.length-2)], data[(data.length-1)]];
}

export function findNForValue(val) {
    if (val < 0) {
        return -1;
    }
    let section = 0;
    let adjustment = 0;
    while (section < bounds.length) {
       if (val <= bounds[section]) {
            return adjustment + ((val - val % step[section]) / step[section]);
       } else {
            adjustment = adjustment + offset[section];
            section = section + 1;
       }
    }
    return data.length - 1;
}

