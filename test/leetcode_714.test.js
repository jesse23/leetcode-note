const maxProfit = require( '../src/leetcode_714' );

describe( 'leetcode_714', function() {
    it( 'Input: prices = [1,3,2,8,4,9], fee = 2', function() {
        expect( maxProfit( [ 1, 3, 2, 8, 4, 9 ], 2 ) ).toEqual( 8 );
    } );

    it( 'Input: prices = [1,3,7,5,10,3], fee = 3', function() {
        expect( maxProfit( [ 1, 3, 7, 5, 10, 3 ], 3 ) ).toEqual( 6 );
    } );
} );
