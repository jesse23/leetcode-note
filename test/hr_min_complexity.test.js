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
        expect( findMinComplexity( [ 4, 2, 1, 5, 3 ], 3 ) ).toEqual( 12 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 2, 1, 5, 4, 3 ], 3 ) ).toEqual( 8 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 2, 5, 1, 5, 5 ], 3 ) ).toEqual( 11 );
    } );

    it( 'test case days = complexity.length', () => {
        expect( findMinComplexity( [ 2, 5, 1, 4, 3 ], 5 ) ).toEqual( 15 );
    } );
} );
