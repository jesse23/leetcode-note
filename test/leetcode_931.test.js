const minFallingPathSum = require( '../src/leetcode_931' );

describe( 'leetcode_931', function() {
    it( 'Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]', function() {
        expect( minFallingPathSum( [
            [ 2, 1, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
        ] ) ).toEqual( 13 );
    } );

    it( 'Input: matrix = [[-19,57],[-40,-5]]', function() {
        expect( minFallingPathSum( [
            [ -19, 57 ],
            [ -40, -5 ]
        ] ) ).toEqual( -59 );
    } );

    it( 'Input: matrix = [[-48]]', function() {
        expect( minFallingPathSum( [
            [ -48 ]
        ] ) ).toEqual( -48 );
    } );
} );
