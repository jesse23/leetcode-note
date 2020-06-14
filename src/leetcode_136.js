// #136 - Single Number

/**
 * normal solution
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberNormal = function( nums ) {
    nums.sort();

    // boundary case
    if( nums.length < 3 ) {
        return nums[ 0 ];
    }

    // i = 2 case
    if( nums[ 0 ] !== nums[ 1 ] ) {
        return nums[ 0 ];
    }

    // i = length -1 case
    let lastIdx = nums.length - 1;
    if( nums[ lastIdx - 1 ] !== nums[ lastIdx ] ) {
        return nums[ lastIdx ];
    }

    for( let i = 3; i < lastIdx; i++ ) {
        if( nums[ i - 1 ] !== nums[ i - 2 ] && nums[ i - 1 ] !== nums[ i ] ) {
            return nums[ i - 1 ];
        }
    }
};

/**
 * xor solution ( in answer)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function( nums ) {
    let a = 0;
    nums.forEach( num => a ^= num );
    return a;
};

module.exports = singleNumber;
