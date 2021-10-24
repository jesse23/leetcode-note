const maxProfit = require( '../src/leetcode_123' );

describe( 'leetcode_123', function() {
    it( 'Input: [3,3,5,0,0,3,1,4]', function() {
        expect( maxProfit( [ 3, 3, 5, 0, 0, 3, 1, 4 ] ) ).toEqual( 6 );
    } );
} );
