const longestPalindromeSubseq = require( '../src/leetcode_516' );

describe( 'leetcode_516', function() {
    it( 'Input: s = "bbbab"', function() {
        expect( longestPalindromeSubseq( "bbbab" ) ).toEqual( 4 );
    } );

    it( 'Input: s = "cbbd"', function() {
        expect( longestPalindromeSubseq( "cbbd" ) ).toEqual( 2 );
    } );
} );
