// Hacker Rank - findMinComplexity 

// - what is the peak value?
// - how many peak values do u have?
// - the gaps between different gap is un predictable 
var findMinComplexity = function( complexity, days ) {

    let sum = 0;
    startIdx = 0;
    endIdx = complexity.length - 1;
    let maxVal = Math.max( ...complexity );

    // extreme case
    if( days === 0 ) {
        return 0;
    }
    if( days === 1 ) {
        return maxVal;
    } else if( days === 2 ) {
        return maxVal + Math.min( complexity[ 0 ], complexity[ complexity.length - 1 ] );
    } else {
        // max is given
        sum += maxVal;
        for( let i = 1; i < days; i++ ) {
            if( complexity[ startIdx ] < complexity[ endIdx ] ) {
                if( complexity[ endIdx ] === maxVal ) {
                    sum += findMinComplexity( complexity.slice( startIdx, endIdx ), days - i );
                    break;
                } else {
                    sum += complexity[ startIdx ];
                    startIdx++;
                }
            } else {
                if( complexity[ startIdx ] === maxVal ) {
                    sum += findMinComplexity( complexity.slice( startIdx + 1, endIdx + 1 ), days - i );
                    break;
                } else {
                    sum += complexity[ endIdx ];
                    endIdx--;
                }
            }
        }

        return sum;
    }
};

module.exports = findMinComplexity;
