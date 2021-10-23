const minDistance = require( '../src/leetcode_72.js' );

describe( 'leetcode_72', function() {
    it( 'Input: word1 = "horse", word2 = "ros"', function() {
        expect( minDistance( "horse", "ros" ) ).toEqual( 3 );
    } );

    it( 'Input: word1 = "horse", word2 = "ros"', function() {
        expect( minDistance( "hor", "ro" ) ).toEqual( 2 );
    } );

    it( 'Input: word1 = "h", word2 = "r"', function() {
        expect( minDistance( "h", "r" ) ).toEqual( 1 );
    } );

    it( 'Input: word1 = "hr", word2 = "r"', function() {
        expect( minDistance( "hr", "r" ) ).toEqual( 1 );
    } );

    it( 'Input: word1 = "hr", word2 = "h"', function() {
        expect( minDistance( "hr", "h" ) ).toEqual( 1 );
    } );

    it( 'Input: word1 = "tt", word2 = "tt"', function() {
        expect( minDistance( "tt", "tt" ) ).toEqual( 0 );
    } );

    it( 'Input: word1 = "intention", word2 = "execution"', function() {
        expect( minDistance( "intention", "execution" ) ).toEqual( 5 );
    } );
} );
