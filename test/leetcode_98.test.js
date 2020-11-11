const isValidBSTArr = require( '../src/leetcode_98' );

describe( 'Test cases for leetcode_102', () => {

    it( 'Input: [2,1,3]', () => {
        expect( isValidBSTArr( [ 2, 1, 3 ] ) ).toEqual( true );
    } );

    it( 'Input: [5,1,4,null,null,3,6]', () => {
        expect( isValidBSTArr( [ 5, 1, 4, null, null, 3, 6 ] ) ).toEqual( false );
    } );

    it( 'Input: [10,5,15,null,null,6,20]', () => {
        expect( isValidBSTArr( [ 10, 5, 15, null, null, 6, 20 ] ) ).toEqual( false );
    } );

    it( 'Input: [1,1]', () => {
        expect( isValidBSTArr( [ 1, 1 ] ) ).toEqual( false );
    } );
} );
