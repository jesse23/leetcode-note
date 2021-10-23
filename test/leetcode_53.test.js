const maxSubArray = require( '../src/leetcode_53' );

describe( 'leetcode_53', function() {
    it( 'Input: nums = [-2,1,-3,4,-1,2,1,-5,4]', function() {
        expect( maxSubArray( [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ] ) ).toEqual( 6 );
    } );

    it( 'Input: nums = [-2, -3]', function() {
        expect( maxSubArray( [ -2, -3 ] ) ).toEqual( -2 );
    } );

    it( 'Input: nums = [1]', function() {
        expect( maxSubArray( [ 1 ] ) ).toEqual( 1 );
    } );

    it( 'Input: nums = [5,4,-1,7,8]', function() {
        expect( maxSubArray( [ 5, 4, -1, 7, 8 ] ) ).toEqual( 23 );
    } );
} );
