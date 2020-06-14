// #189 - Rotate Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function( nums, k ) {
    const length = nums.length;

    k = k % length;

    for( let counter = 0, start = 0, next = 1; counter < length && start < k; start = next, next++ ) {
        const cache = nums[ start ];
        for( let tar = start, src = -1; src === -1 || tar !== start; tar = src ) {

            // backward to save one swap
            src = tar - k;
            src = src < 0 ? src + length : src;
            nums[ tar ] = ( src === start ) ? cache : nums[ src ];

            // if next is getting occupied, take next of next
            if( tar === next ) {
                next++;
            }

            // increase counter
            counter++;
        }
    }
};

module.exports = rotate;
