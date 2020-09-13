const findMinComplexity = require( '../src/hr_min_complexity' );

describe( 'Test cases for hr_min_complexity', () => {

    it( 'Test 1 day use case in sorted complexity', () => {
        expect( findMinComplexity( [ 1, 2, 3, 4, 5 ], 1 ) ).toEqual( 5 );
    } );

    it( 'Test 2 day use case in all single step weight', () => {
        expect( findMinComplexity( [ 5, 4, 3, 2, 1 ], 2 ) ).toEqual( 6 );
    } );

    it( 'Test complexity.length === days', () => {
        expect( findMinComplexity( [ 5, 4, 3, 2, 1 ], 5 ) ).toEqual( 15 );
    } );

    it( 'Test 1 day use case in unsorted complexity', () => {
        expect( findMinComplexity( [ 2, 4, 3, 5, 1 ], 1 ) ).toEqual( 5 );
    } );

    it( 'Test 2 day use case in unsorted complexity', () => {
        expect( findMinComplexity( [ 2, 4, 3, 5, 1 ], 2 ) ).toEqual( 6 );
    } );

    it( 'Test 3 day use case in unsorted complexity', () => {
        expect( findMinComplexity( [ 2, 4, 3, 5, 1 ], 3 ) ).toEqual( 8 );
    } );

    it( 'Test 3 day use case in unsorted complexity', () => {
        expect( findMinComplexity( [ 2, 4, 3, 5, 1 ], 4 ) ).toEqual( 12 );
    } );

    it( 'test case days = complexity.length', () => {
        expect( findMinComplexity( [ 2, 5, 1, 4, 3 ], 5 ) ).toEqual( 15 );
    } );

    it( 'test case days = complexity.length', () => {
        expect( findMinComplexity( [ 5, 4, 3, 2, 1 ], 4 ) ).toEqual( 11 );
    } );

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
        expect( findMinComplexity( [ 4, 2, 1, 5, 3 ], 3 ) ).toEqual( 10 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 4, 2, 1, 5, 3 ], 2 ) ).toEqual( 8 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 2, 1, 5, 4, 3 ], 3 ) ).toEqual( 8 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 2, 3, 1, 4 ], 3 ) ).toEqual( 8 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 5, 1, 6, 4, 3, 2 ], 4 ) ).toEqual( 14 );
    } );
    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 5, 1, 6, 4, 3, 2 ], 3 ) ).toEqual( 11 );
    } );

    it( 'test case days = 3', () => {
        expect( findMinComplexity( [ 3, 6, 2, 1, 7, 4, 5 ], 3 ) ).toEqual( 14 );
    } );

    it( 'test case days = 4', () => {
        expect( findMinComplexity( [ 3, 6, 2, 1, 7, 4, 5 ], 4 ) ).toEqual( 16 );
    } );
} );
