const generateParenthesis = require( '../src/leetcode_22' );

describe( 'leetcode_22', function() {
    it( 'Input: n = 1', function() {
        expect( generateParenthesis( 1 ) ).toEqual( [ '()' ] );
    } )

    it( 'Input: n = 2', function() {
        expect( generateParenthesis( 2 ) ).toEqual( [ '(())', '()()' ] );
    } )

    it( 'Input: n = 3', function() {
        expect( generateParenthesis( 3 ) ).toEqual( [ '((()))', '(()())', '(())()', '()(())', '()()()' ] );
    } )
} )
