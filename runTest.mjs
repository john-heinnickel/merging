import {showValuesAtN, findNForValue} from "./findN.mjs";

const testCases = [-100, -1, 0, 1, 20, 30, 40, 50, 90, 100, 500, 519, 520, 521, 537, 1000, 2007, 2008, 2009, 2011, 2012, 2013, 2853, 3000, 3005, 3010, 3015, 3019, 3020, 3021, 9007, 9008, 9009, 9011, 9012, 9013, 9999, 10000, 10001, 20000, 30007, 30008, 30009, 30011, 30012, 30013, 50000, 50019, 50020, 50021, 72007, 72008, 72009, 72011, 72012, 72013, 75000, 99978, 99979, 99980, 99981, 99991, 99999, 100000, 100001]

let ii;
for ( ii of testCases ) {
	const n = findNForValue(ii);
	const range = showValuesAtN(n);
	console.log( "<" + ii + "> is at <" + n + ">, and is both greater than or equal to <" + range[0] + "> and less than <" + range[1] + ">" );
}

