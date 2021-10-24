// #0 - template 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function( nums ) {
    const sum = nums.reduce( ( prev, c ) => prev + c, 0 );
    if( sum % 2 === 0 ) {
        const target = sum / 2;
        const dp = [ true ];

        for( let i = 0; i < nums.length; i++ ) {
            for( let j = target; j >= 0; j-- ) {
                if( j - nums[ i ] >= 0 ) {
                    dp[ j ] = ( dp[ j ] || dp[ j - nums[ i ] ] );
                }
            }
        }
        return Boolean( dp[ target ] );
    }
    return false;
};

module.exports = canPartition;
