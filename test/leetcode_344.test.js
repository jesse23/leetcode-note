const reverseString = require( '../src/leetcode_344' );

describe( 'Test cases for leetcode_344', () => {

    it( 'Input: ["a","b"], Output: ["b","a"]', () => {
        const fixture = [ "a", "b" ];
        expect( ( reverseString( fixture ), fixture ) ).toEqual( [ "b", "a" ] );
    } );

    it( 'Input: ["h","e","l","l","o"], Output: ["o","l","l","e","h"]', () => {
        const fixture = [ "h", "e", "l", "l", "o" ];
        expect( ( reverseString( fixture ), fixture ) ).toEqual( [ "o", "l", "l", "e", "h" ] );
    } );

    it( 'Input: ["H","a","n","n","a","h"], Output: ["h","a","n","n","a","H"]', () => {
        const fixture = [ "H", "a", "n", "n", "a", "h" ];
        expect( ( reverseString( fixture ), fixture ) ).toEqual( [ "h", "a", "n", "n", "a", "H" ] );
    } );

    it( 'Input: [], Output: []', () => {
        const fixture = [];
        expect( ( reverseString( fixture ), fixture ) ).toEqual( [] );
    } );

    it( 'Input: [1], Output: [1]', () => {
        const fixture = [ 1 ];
        expect( ( reverseString( fixture ), fixture ) ).toEqual( [ 1 ] );
    } );
} );
