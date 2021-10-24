const canPartition = require( '../src/leetcode_416' );

describe( 'leetcode_416', function() {
    it( 'Input: nums = [1,5,11,5]', function() {
        expect( canPartition( [ 1, 5, 11, 5 ] ) ).toEqual( true );
    } );

    it( 'Input: nums = [1,2,5]', function() {
        expect( canPartition( [ 1, 2, 5 ] ) ).toEqual( false );
    } );
} );
