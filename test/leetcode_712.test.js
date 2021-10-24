const minimumDeleteSum = require( '../src/leetcode_712' );

describe( 'leetcode_712', function() {
    it( 'Input: s1 = "sea", s2 = "eat"', function() {
        expect( minimumDeleteSum( "sea", "eat" ) ).toEqual( 231 );
    } );

    it( 'Input: s1 = "delete", s2 = "leet"', function() {
        expect( minimumDeleteSum( "delete", "leet" ) ).toEqual( 403 );
    } );
} );
