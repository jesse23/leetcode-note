const plusOne = require( '../src/leetcode_66' );

describe( 'Test cases for leetcode_66', () => {

    it( 'Input: [0], Output: [1]', () => {
        expect( plusOne( [ 0 ] ) ).toEqual( [ 1 ] );
    } );

    it( 'Input: [1,5], Output: [1,6]', () => {
        expect( plusOne( [ 1, 5 ] ) ).toEqual( [ 1, 6 ] );
    } );

    it( 'Input: [1,9], Output: [2,0]', () => {
        expect( plusOne( [ 1, 9 ] ) ).toEqual( [ 2, 0 ] );
    } );

    it( 'Input: [9,9], Output: [1,0,0]', () => {
        expect( plusOne( [ 9, 9 ] ) ).toEqual( [ 1, 0, 0 ] );
    } );

    it( 'Input: [], Output: []', () => {
        expect( plusOne( [] ) ).toEqual( [] );
    } );

    it( 'Input: [1,2,3], Output: [1,2,4]', () => {
        expect( plusOne( [ 1, 2, 3 ] ) ).toEqual( [ 1, 2, 4 ] );
    } );

    it( 'Input: [4,3,2,1], Output: [4,3,2,2]', () => {
        expect( plusOne( [ 4, 3, 2, 1 ] ) ).toEqual( [ 4, 3, 2, 2 ] );
    } );
} );
