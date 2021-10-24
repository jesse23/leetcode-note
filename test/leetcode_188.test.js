const maxProfit = require( '../src/leetcode_188' );

describe( 'leetcode_188', function() {
    it( 'Input: k = 2, prices = [2,4,1]', function() {
        expect( maxProfit( 2, [ 2, 4, 1 ] ) ).toEqual( 2 );
    } );

    it( 'Input: k = 2, prices = [3,2,6,5,0,3]', function() {
        expect( maxProfit( 2, [ 3, 2, 6, 5, 0, 3 ] ) ).toEqual( 7 );
    } );
} );
