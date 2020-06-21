const reverse = require( '../src/leetcode_7' );

describe( 'Test cases for leetcode_7', () => {

    it( 'Input: 12, Output: 21', () => {
        expect( reverse( 12 ) ).toEqual( 21 );
    } );

    it( 'Input: 123, Output: 321', () => {
        expect( reverse( 123 ) ).toEqual( 321 );
    } );

    it( 'Input: 120, Output: 21', () => {
        expect( reverse( 120 ) ).toEqual( 21 );
    } );

    it( 'Input: -123, Output: -321', () => {
        expect( reverse( -123 ) ).toEqual( -321 );
    } );

    it( 'Input: 0, Output: 0', () => {
        expect( reverse( 0 ) ).toEqual( 0 );
    } );

    it( 'Input: 1, Output: 1', () => {
        expect( reverse( 1 ) ).toEqual( 1 );
    } );

    it( 'Input: 1534236469, Output: 9646324351', () => {
        expect( reverse( 1534236469 ) ).toEqual( 0 );
    } );
} );
