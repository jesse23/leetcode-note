// Hacker Rank - findMinComplexity 

var findMinComplexity = function( complexity, days ) {

    let sum = 0;

    // extreme case
    if( days === 1 ) {
        return Math.max( ...complexity );
    } else {
        let startIdx = 0;
        let endIdx = complexity.length - 1;
        // let best = Math.min( complexity[ startIdx ], complexity[ endIdx ] );
        let maxVal = Math.max( ...complexity );

        // max is given
        sum += maxVal;
        for( let i = 1; i < days; i++ ) {
            let anchorIdx = complexity[ startIdx ] < complexity[ endIdx ] ? startIdx : endIdx;

            if( complexity[ anchorIdx ] === maxVal ) {

            }

            if( complexity[ startIdx ] < complexity[ endIdx ] ) {
                sum += complexity[ startIdx ];
                startIdx++;
            } else {
                sum += complexity[ endIdx ];
                endIdx--;
            }
        }

        return sum;
    }
};

module.exports = findMinComplexity;
