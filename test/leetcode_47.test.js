const permuteUnique = require( '../src/leetcode_47' );

describe( 'leetcode_47', function() {

    it( 'Input: [1]', function() {
        expect( permuteUnique( [ 1 ] ) ).toEqual( [
            [ 1 ]
        ] );
    } )

    it( 'Input: [1,2]', function() {
        expect( permuteUnique( [ 1, 2 ] ) ).toEqual( [
            [ 1, 2 ],
            [ 2, 1 ]
        ] );
    } )

    it( 'Input: [1,1]', function() {
        expect( permuteUnique( [ 1, 1 ] ) ).toEqual( [
            [ 1, 1 ]
        ] );
    } )

    it( 'Input: [1,1,2]', function() {
        expect( permuteUnique( [ 1, 1, 2 ] ) ).toEqual( [
            [ 1, 1, 2 ],
            [ 1, 2, 1 ],
            [ 2, 1, 1 ]
        ] );
    } )

    it( 'Input: [2,2,1,1]', function() {
        expect( permuteUnique( [ 2, 2, 1, 1 ] ) ).toEqual( [
            [ 2, 2, 1, 1 ],
            [ 2, 1, 2, 1 ],
            [ 2, 1, 1, 2 ],
            [ 1, 2, 2, 1 ],
            [ 1, 2, 1, 2 ],
            [ 1, 1, 2, 2 ]
        ] );
    } )
} )
