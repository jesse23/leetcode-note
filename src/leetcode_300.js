// #0 - template 

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function( nums ) {
    const dp = Array( nums.length ).fill( 0 );
    dp[ 0 ] = 1;
    for( let i = 0; i < nums.length; i++ ) {
        for( let j = 0; j < i; j++ ) {
            if( nums[ i ] > nums[ j ] ) {
                dp[ i ] = Math.max( dp[ i ], dp[ j ] + 1 )
            }
        }
        // console.log( `${i} => ${dp[i]}` )
    }

    let res = 0;
    for( let i = 0; i < dp.length; i++ ) {
        res = Math.max( res, dp[ i ] );
    }
    return res;
};

module.exports = lengthOfLIS;
