const maxProfit = require( '../src/leetcode_122' );

describe( 'Leetcode 997', () => {

    it( 'Input: [7,1,5,3,6,4], Output: 7', () => {
        expect( maxProfit( [ 7, 1, 5, 3, 6, 4 ] ) ).toEqual( 7 );
    } );

    it( 'Input: [1,2,3,4,5], Output: 4', () => {
        expect( maxProfit( [ 1, 2, 3, 4, 5 ] ) ).toEqual( 4 );
    } );

    it( 'Input: [7,6,4,3,1], Output: 4', () => {
        expect( maxProfit( [ 7, 6, 4, 3, 1 ] ) ).toEqual( 0 );
    } );

} );
