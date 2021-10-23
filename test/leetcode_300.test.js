const lengthOfLIS = require( '../src/leetcode_300' );

describe( 'leetcode_300', function() {
    it( 'Input: [1, 2, 5, 6, 3, 4, 5]', function() {
        expect( lengthOfLIS( [ 1, 2, 5, 6, 3, 4, 5, 4 ] ) ).toEqual( 5 );
    } );
} );
