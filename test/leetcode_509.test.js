const fib = require( '../src/leetcode_509' );

describe( 'leetcode_509', function() {
    it( 'Input: n = 2', function() {
        expect( fib( 2 ) ).toEqual( 1 );
    } )

    it( 'Input: n = 3', function() {
        expect( fib( 3 ) ).toEqual( 2 );
    } )

    it( 'Input: n = 4', function() {
        expect( fib( 4 ) ).toEqual( 3 );
    } )
} )
