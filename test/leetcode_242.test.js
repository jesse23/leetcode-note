const isAnagram = require( '../src/leetcode_242' );

describe( 'Test cases for leetcode_242', () => {

    it( 'Input: s = "anagram", t = "nagaram", Output: true', () => {
        expect( isAnagram( "anagram", "nagaram" ) ).toEqual( true );
    } );

    it( 'Input: s = "rat", t = "car", Output: false', () => {
        expect( isAnagram( "rat", "car" ) ).toEqual( false );
    } );
} );
