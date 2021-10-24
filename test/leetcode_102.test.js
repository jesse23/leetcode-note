const levelOrder = require( '../src/leetcode_102' );
const levelArrayToTree = require( '../utils/tree_helper' );

describe( 'Test cases for leetcode_102', () => {

    it( 'Input: [3,9,20,null,null,15,7]', () => {
        expect( levelOrder( levelArrayToTree( [ 3, 9, 20, null, null, 15, 7 ] ) ) ).toEqual(
            [
                [ 3 ],
                [ 9, 20 ],
                [ 15, 7 ]
            ]
        );
    } );
} );
