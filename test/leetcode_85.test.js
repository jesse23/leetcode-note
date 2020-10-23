const maximalRectangle = require( '../src/leetcode_85' );

describe( 'leetcode_85', function() {
    it( 'Input: matrix = []', function() {
        expect( maximalRectangle( [] ) ).toEqual( 0 );
    } )

    it( 'Input: matrix = [["0","0"]]', function() {
        expect( maximalRectangle( [
            [ "0", "0" ]
        ] ) ).toEqual( 0 );
    } )

    it( 'Input: matrix = [["1"]]', function() {
        expect( maximalRectangle( [
            [ "1" ]
        ] ) ).toEqual( 1 );
    } )

    it( 'Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', function() {
        expect( maximalRectangle( [
            [ "1", "0", "1", "0", "0" ],
            [ "1", "0", "1", "1", "1" ],
            [ "1", "1", "1", "1", "1" ],
            [ "1", "0", "0", "1", "0" ]
        ] ) ).toEqual( 6 );
    } )

    it( 'Inuput: another 5*5 xeample', function() {
        expect( maximalRectangle( [
            [ "1", "0", "1", "1", "1" ],
            [ "0", "1", "0", "1", "0" ],
            [ "1", "1", "0", "1", "1" ],
            [ "1", "1", "0", "1", "1" ],
            [ "0", "1", "1", "1", "1" ]
        ] ) ).toEqual( 6 );
    } )

    it( 'Inuput: another 2*2 exeample', function() {
        expect( maximalRectangle( [
            [ "1", "0" ],
            [ "0", "1" ]
        ] ) ).toEqual( 1 );
    } )

    it( 'Inuput: another 2*2 exeample 1', function() {
        expect( maximalRectangle( [
            [ "0", "1" ],
            [ "1", "0" ]
        ] ) ).toEqual( 1 );
    } )
} )
