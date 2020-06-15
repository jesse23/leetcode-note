const rotate = require( '../src/leetcode_189' );

describe( 'Test cases for leetcode_189', () => {

    it( 'Input: nums = [0,1], k = 1, Output: [1,0]', () => {
        const nums = [ 0, 1 ];
        expect( ( rotate( nums, 1 ), nums ) ).toEqual( [ 1, 0 ] );
    } );

    it( 'Input: nums = [0,1,2,3], k = 2, Output: [2,3,0,1]', () => {
        const nums = [ 0, 1, 2, 3 ];
        expect( ( rotate( nums, 2 ), nums ) ).toEqual( [ 2, 3, 0, 1 ] );
    } );

    it( 'Input: nums = [1,2,3,4,5,6,7], k = 3, Output: [5,6,7,1,2,3,4]', () => {
        const nums = [ 1, 2, 3, 4, 5, 6, 7 ];
        expect( ( rotate( nums, 3 ), nums ) ).toEqual( [ 5, 6, 7, 1, 2, 3, 4 ] );
    } );

    it( 'Input: nums = [-1,-100,3,99], k = 2, Output: [3,99,-1,-100]', () => {
        const nums = [ -1, -100, 3, 99 ];
        expect( ( rotate( nums, 2 ), nums ) ).toEqual( [ 3, 99, -1, -100 ] );
    } );

    it( 'Input: nums = [1], k = 1, Output: [1]', () => {
        const nums = [ 1 ];
        expect( ( rotate( nums, 1 ), nums ) ).toEqual( [ 1 ] );
    } );

} );
