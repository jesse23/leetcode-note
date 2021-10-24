const maxProfit = require( '../src/leetcode_121' );

describe( 'leetcode_121', function() {
    it( 'Input: prices = [7,1,5,3,6,4]', function() {
        expect( maxProfit( [ 7, 1, 5, 3, 6, 4 ] ) ).toEqual( 5 );
    } );
} );
