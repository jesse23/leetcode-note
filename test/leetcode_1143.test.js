const longestCommonSubsequence = require( '../src/leetcode_1143' );

describe( 'leetcode_1143', function() {
    it( 'Input: text1 = "abcde", text2 = "ace"', function() {
        expect( longestCommonSubsequence( "abcde", "ace" ) ).toEqual( 3 );
    } );

    it( 'Input: text1 = "abc", text2 = "abc"', function() {
        expect( longestCommonSubsequence( "abc", "abc" ) ).toEqual( 3 );
    } );

    it( 'Input: text1 = "abcde", text2 = "bdcd"', function() {
        expect( longestCommonSubsequence( "abcde", "bdcd" ) ).toEqual( 3 );
    } );

    it( 'Input: text1 = "abc", text2 = "def"', function() {
        expect( longestCommonSubsequence( "abc", "def" ) ).toEqual( 0 );
    } );
} );
