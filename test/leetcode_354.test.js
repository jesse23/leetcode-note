const maxEnvelopes = require( '../src/leetcode_354' );

describe( 'leetcode_354', function() {
    it( 'Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]', function() {
        expect( maxEnvelopes( [
            [ 5, 4 ],
            [ 6, 4 ],
            [ 6, 7 ],
            [ 2, 3 ]
        ] ) ).toEqual( 3 );
    } );

    it( 'Input: envelopes = [[1,1],[1,1],[1,1]]', function() {
        expect( maxEnvelopes( [
            [ 5, 4 ],
            [ 6, 4 ],
            [ 6, 7 ],
            [ 2, 3 ]
        ] ) ).toEqual( 3 );
    } );
} );
