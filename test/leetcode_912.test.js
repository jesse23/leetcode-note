const sortArray = require( '../src/leetcode_912' );

describe( 'Test cases for leetcode_912', () => {

    it( 'Input: nums = [5,2,3,1]', () => {
        expect( sortArray( [ 5, 2, 3, 1 ] ) ).toEqual( [ 1, 2, 3, 5 ] );
    } );

    it( 'Input: nums = [5,1,1,2,0,0]', () => {
        expect( sortArray( [ 5, 1, 1, 2, 0, 0 ] ) ).toEqual( [ 0, 0, 1, 1, 2, 5 ] );
    } );
} );
