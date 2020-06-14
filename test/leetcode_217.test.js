const containsDuplicate = require( '../src/leetcode_217' );

describe( 'Leetcode 217', () => {
    it( 'Input: [1,2,3,1], Output: true', () => {
        expect( containsDuplicate( [ 1, 2, 3, 1 ] ) ).toEqual( true );
    } );

    it( 'Input: [1,2,3,4], Output: false', () => {
        expect( containsDuplicate( [ 1, 2, 3, 4 ] ) ).toEqual( false );
    } );

    it( 'Input: [1,1,1,3,3,4,3,2,4,2], Output: true', () => {
        expect( containsDuplicate( [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ] ) ).toEqual( true );
    } );

    it( 'Input: [], Output: false', () => {
        expect( containsDuplicate( [] ) ).toEqual( false );
    } );

    it( 'Input: [3], Output: false', () => {
        expect( containsDuplicate( [ 3 ] ) ).toEqual( false );
    } );
} );
