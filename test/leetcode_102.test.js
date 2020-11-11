const levelOrderArr = require( '../src/leetcode_102' );

describe( 'Test cases for leetcode_102', () => {

    it( 'Input: [3,9,20,null,null,15,7]', () => {
        expect( levelOrderArr( [ 3, 9, 20, null, null, 15, 7 ] ) ).toEqual(
            [
                [ 3 ],
                [ 9, 20 ],
                [ 15, 7 ]
            ]
        );
    } );
} );
