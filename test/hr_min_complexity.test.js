const findMinComplexity = require( '../src/hr_min_complexity' );

describe( 'Test cases for hr_min_complexity', () => {

    it( 'test case days = 1', () => {
        expect( findMinComplexity( [ 1, 5, 3, 2, 4 ], 1 ) ).toEqual( 5 );
    } );

    it( 'test case days = 2', () => {
        expect( findMinComplexity( [ 1, 5, 3, 2, 4 ], 2 ) ).toEqual( 6 );
    } );

    it( 'test case days = 2', () => {
        expect( findMinComplexity( [ 4, 2, 3, 5, 1 ], 2 ) ).toEqual( 6 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 2, 5, 1, 4, 3 ], 3 ) ).toEqual( 10 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 4, 2, 1, 5, 3 ], 3 ) ).toEqual( 11 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 2, 1, 5, 4, 3 ], 3 ) ).toEqual( 8 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 2, 3, 1, 4 ], 3 ) ).toEqual( 8 );
    } );

    xit( 'test case days = 3', () => {
        expect( findMinComplexity( [ 4, 1, 5, 2, 2 ], 3 ) ).toEqual( 9 );
    } );

    xit( 'test case days = 3', () => {
        expect( findMinComplexity( [ 3, 6, 2, 1, 7, 4, 5 ], 3 ) ).toEqual( 14 );
    } );

    xit( 'test case days = 4', () => {
        expect( findMinComplexity( [ 3, 6, 2, 1, 7, 4, 5 ], 4 ) ).toEqual( 16 );
    } );

    xit( 'test case days = complexity.length', () => {
        expect( findMinComplexity( [ 2, 5, 1, 4, 3 ], 5 ) ).toEqual( 15 );
    } );
} );
