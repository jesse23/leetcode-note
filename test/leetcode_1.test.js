const twoSum = require( '../src/leetcode_1' );

describe( 'Test cases for leetcode_1', () => {

    it( 'Given nums = [2, 7, 11, 15], target = 9, return [0, 1]', () => {
        expect( twoSum( [ 2, 7, 11, 15 ], 9 ) ).toEqual( [ 0, 1 ] );
    } );

    it( 'Given nums = [3,2,4], target = 6, return [1, 2]', () => {
        expect( twoSum( [ 3, 2, 4 ], 6 ) ).toEqual( [ 1, 2 ] );
    } );

    it( 'Given nums = [3,3], target = 6, return [0, 1]', () => {
        expect( twoSum( [ 3, 3 ], 6 ) ).toEqual( [ 0, 1 ] );
    } );

    it( 'Given nums = [0,4,3,0], target = 0, return [0, 3]', () => {
        expect( twoSum( [ 0, 4, 3, 0 ], 0 ) ).toEqual( [ 0, 3 ] );
    } );

    it( 'Given nums = [-1,-2,-3,-4,-5], target = -8, return [2, 4]', () => {
        expect( twoSum( [ -1, -2, -3, -4, -5 ], -8 ) ).toEqual( [ 2, 4 ] );
    } );
} );
