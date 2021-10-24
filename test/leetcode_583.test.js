const minDistance = require( '../src/leetcode_583' );

describe( 'leetcode_583', function() {
    it( 'Input: word1 = "sea", word2 = "eat"', function() {
        expect( minDistance( "sea", "eat" ) ).toEqual( 2 );
    } );
} );
