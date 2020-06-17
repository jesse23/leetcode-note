// #1 - Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function( nums, target ) {

    // https://stackoverflow.com/questions/368280/javascript-hashmap-equivalent
    const numsMap = {};
    for( let i = 0; i < nums.length; i++ ) {
        const val = nums[ i ];
        const complement = target - val;

        // if complement exist in map, result found
        if( numsMap.hasOwnProperty( complement ) ) {
            return [ numsMap[ complement ], i ];
        }

        // push it to map and keep moving
        if( !numsMap.hasOwnProperty( val ) ) {
            numsMap[ val ] = i;
        }
    }

    /*
    old solution use array wth some tuning. 
    It is close to hashmap solution in JS but much complex
    // sort nums
    sortNums = nums.slice().sort( ( a, b ) => a - b );

    // get the index of target
    let idx = 0;
    let isNegative = sortNums[ sortNums.length - 1 ] <= 0 && sortNums[ 0 ] < 0;
    let isPositive = sortNums[ sortNums.length - 1 ] > 0 && sortNums[ 0 ] >= 0;
    if( isPositive || isNegative ) {
        for( ; sortNums[ idx ] <= target && idx < sortNums.length - 1; idx++ );
    } else {
        idx = sortNums.length - 1;
    }

    let i = 0,
        j = 0;
    if( isPositive || !isNegative ) {
        for( i = 0; i < idx; i++ ) {
            for( j = idx; j > i && sortNums[ i ] + sortNums[ j ] > target; j-- );
            if( sortNums[ i ] + sortNums[ j ] === target ) {
                break;
            }
        }
    } else {
        for( j = idx; i < sortNums.length; j++ ) {
            for( i = sortNums.length - 1; i > j && sortNums[ i ] + sortNums[ j ] > target; i-- );
            if( sortNums[ i ] + sortNums[ j ] === target ) {
                break;
            }
        }
    }

    let first = nums.indexOf( sortNums[ i ] );
    nums[ first ] = null;
    let second = nums.indexOf( sortNums[ j ] );
    return [ first, second ];
    */
};

module.exports = twoSum;
