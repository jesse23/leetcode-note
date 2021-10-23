const findTargetSumWays = require( '../src/leetcode_494' );

describe( 'leetcode_494', function() {
    it( 'Input: nums = [1,1,1,1,1], target = 3', function() {
        expect( findTargetSumWays( [ 1, 1, 1, 1, 1 ], 3 ) ).toEqual( 5 );
    } );

    it( 'Input: nums = [1], target = 1', function() {
        expect( findTargetSumWays( [ 1 ], 1 ) ).toEqual( 1 );
    } );

} );
