const isPalindrome = require( '../src/leetcode_680' );

describe( 'Test cases for leetcode_680', () => {

    it( 'Input: "aka", Output: true', () => {
        expect( isPalindrome( "aka" ) ).toEqual( true );
    } );

    it( 'Input: "a,k a", Output: true', () => {
        expect( isPalindrome( "aka" ) ).toEqual( true );
    } );

    it( 'Input: "A,k a", Output: true', () => {
        expect( isPalindrome( "aka" ) ).toEqual( true );
    } );

    it( 'Input: "race a car", Output: false', () => {
        expect( isPalindrome( "race a car" ) ).toEqual( false );
    } );

    it( 'Input: "A man, a plan, a canal: Panama", Output: true', () => {
        expect( isPalindrome( "A man, a plan, a canal: Panama" ) ).toEqual( true );
    } );

    it( 'Input: "", Output: true', () => {
        expect( isPalindrome( "" ) ).toEqual( true );
    } );

    it( 'Input: "0P", Output: false', () => {
        expect( isPalindrome( "0P" ) ).toEqual( false );
    } );

} );
