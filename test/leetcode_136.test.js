const singleNumber = require( '../src/leetcode_136' );

describe( 'Test cases for leetcode_136', () => {
    it( 'Input: [2,2,1], Output: 1', () => {
        expect( singleNumber( [ 2, 2, 1 ] ) ).toEqual( 1 );
    } );

    it( 'Input: [4,1,2,1,2], Output: 4', () => {
        expect( singleNumber( [ 4, 1, 2, 1, 2 ] ) ).toEqual( 4 );
    } );

    it( 'Input: [3,3,2,1,1], Output: 2', () => {
        expect( singleNumber( [ 3, 3, 2, 1, 1 ] ) ).toEqual( 2 );
    } );

    // boundary case
    it( 'Input: [5], Output: 5', () => {
        expect( singleNumber( [ 5 ] ) ).toEqual( 5 );
    } );
} );
