// #283 - Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function( nums ) {
    for( let i = 0, start = -1; i < nums.length; i++ ) {
        if( nums[ i ] === 0 ) {
            if( start === -1 ) {
                start = i;
            }
        } else {
            if( start !== -1 ) {
                nums[ start ] = nums[ i ];
                nums[ i ] = 0;
                start++;
            }
        }
    }
    return nums;
};

module.exports = moveZeroes;
