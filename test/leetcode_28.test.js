const strStr = require( '../src/leetcode_28' );

describe( 'Test cases for leetcode_28', () => {

    it( 'Input: haystack = "hello", needle = "ll", Output: 2', () => {
        expect( strStr( "hello", "ll" ) ).toEqual( 2 );
    } );

    it( 'Input: haystack = "aaaaa", needle = "bba", Output: -1', () => {
        expect( strStr( "aaaaa", "bba" ) ).toEqual( -1 );
    } );

    it( 'Input: haystack = "aaaaa", needle = "", Output: 0', () => {
        expect( strStr( "aaaaa", "" ) ).toEqual( 0 );
    } );

    it( 'Input: haystack = "", needle = "", Output: 0', () => {
        expect( strStr( "", "" ) ).toEqual( 0 );
    } );

    it( 'Input: haystack = "", needle = "a", Output: -1', () => {
        expect( strStr( "", "a" ) ).toEqual( -1 );
    } );

    it( 'Input: haystack = "aaa", needle = "aaaa", Output: -1', () => {
        expect( strStr( "aaa", "aaaa" ) ).toEqual( -1 );
    } );

    it( 'Input: haystack = "a", needle = "a", Output: 0', () => {
        expect( strStr( "a", "a" ) ).toEqual( 0 );
    } );


} );
