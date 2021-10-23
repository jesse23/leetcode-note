// 53. Maximum Subarray 

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function( nums ) {
    if( Math.max( ...nums ) <= 0 ) {
        return Math.max( ...nums );
    }

    let curr = 0;
    let lastPositive = 0;
    for( let i = 0; i < nums.length; i++ ) {
        if( nums[ i ] > 0 ) {
            curr = Math.max( nums[ i ], curr + nums[ i ] )
        } else if( nums[ i ] < 0 ) {
            lastPositive = Math.max( lastPositive, curr );
            curr += nums[ i ];
        }
    }
    return Math.max( curr, lastPositive );
};

module.exports = maxSubArray;
