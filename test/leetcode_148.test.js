const sortArray = require( '../src/leetcode_148' );

describe( 'test', function() {
    it( 'Input: head = [-1,5,3,4,0]', function() {
        expect( sortArray( [ -1, 5, 3, 4, 0 ] ) ).toEqual( [ -1, 0, 3, 4, 5 ] );
    } );
} );
