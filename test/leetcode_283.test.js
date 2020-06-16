const moveZeroes = require( '../src/leetcode_283' );

describe( 'Test cases for leetcode_283', () => {

    it( 'Input: [0,1,0,3,12], Output: [1,3,12,0,0]', () => {
        expect( moveZeroes( [ 0, 1, 0, 3, 12 ] ) ).toEqual( [ 1, 3, 12, 0, 0 ] );
    } );

    it( 'Input: [0,1], Output: [1,0]', () => {
        expect( moveZeroes( [ 0, 1 ] ) ).toEqual( [ 1, 0 ] );
    } );

    it( 'Input: [], Output: []', () => {
        expect( moveZeroes( [] ) ).toEqual( [] );
    } );

} );
