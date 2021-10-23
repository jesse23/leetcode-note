// 494. Target Sum

var findTargetSumWaysDpm = function( nums, target, idx ) {
    if( idx === nums.length - 1 ) {
        return ( Math.abs( nums[ idx ] ) === Math.abs( target ) ) ? ( target === 0 ? 2 : 1 ) : 0;
    }
    return findTargetSumWaysDpm( nums, target - nums[ idx ], idx + 1 ) +
        findTargetSumWaysDpm( nums, target + nums[ idx ], idx + 1 );

}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function( nums, target ) {
    return findTargetSumWaysDpm( nums, target, 0 );
};

module.exports = findTargetSumWays;
