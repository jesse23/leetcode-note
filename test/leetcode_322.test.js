const coinChange = require( '../src/leetcode_322' );

describe( 'leetcode_322', function() {
    it( 'coins = [1,2,5], amount = 11', function() {
        expect( coinChange( [ 1, 2, 5 ], 11 ) ).toEqual( 3 );
    } );

    it( 'coins = [2], amount = 3', function() {
        expect( coinChange( [ 2 ], 3 ) ).toEqual( -1 );
    } );

    it( 'coins = [1], amount = 0', function() {
        expect( coinChange( [ 1 ], 0 ) ).toEqual( 0 );
    } );

    it( 'coins = [1], amount = 1', function() {
        expect( coinChange( [ 1 ], 1 ) ).toEqual( 1 );
    } );

    it( 'coins = [1], amount = 2', function() {
        expect( coinChange( [ 1 ], 2 ) ).toEqual( 2 );
    } );
} )
