const maxProfit = require( '../src/leetcode_309' );

describe( 'leetcode_309', function() {
    it( 'Input: prices = [1,2,3,0,2]', function() {
        expect( maxProfit( [ 1, 2, 3, 0, 2 ] ) ).toEqual( 3 );
    } );

    it( 'Input: prices = [1]', function() {
        expect( maxProfit( [ 1 ] ) ).toEqual( 0 );
    } );

    it( 'Input: prices = [1, 2]', function() {
        expect( maxProfit( [ 1, 2 ] ) ).toEqual( 1 );
    } );

    it( 'Input: prices = [2, 1, 4]', function() {
        expect( maxProfit( [ 2, 1, 4 ] ) ).toEqual( 3 );
    } );
} );
