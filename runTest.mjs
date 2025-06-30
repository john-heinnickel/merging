import {showValuesAtN, findNForValue} from "./findN.mjs";

const testCases = [-100, -1, 0, 1, 20, 30, 40, 50, 90, 100, 500, 519, 520, 521, 537, 1000, 2853, 9999, 10000, 10001, 20000, 50000, 50019, 50020, 50021, 99978, 99979, 99980, 99981, 99991, 99999, 100000, 100001]

let ii;
for ( ii of testCases ) {
	const n = findNForValue(ii);
	const range = showValuesAtN(n);
	console.log( "<" + ii + "> is at <" + n + ">, and is both greater than or equal to <" + range[0] + "> and less than <" + range[1] + ">" );
}

