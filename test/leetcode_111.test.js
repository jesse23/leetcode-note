const minDepth = require( '../src/leetcode_111' );
const levelArrayToTree = require( '../utils/tree_helper' );

describe( 'test', function() {
    it( 'Input: root = [3,9,20,null,null,15,7]', function() {
        expect( minDepth( levelArrayToTree( [ 3, 9, 20, null, null, 15, 7 ] ) ) ).toEqual( 2 );
    } );

    it( 'Input: root = [2,null,3,null,4,null,5,null,6]', function() {
        expect( minDepth( levelArrayToTree( [ 2, null, 3, null, 4, null, 5, null, 6 ] ) ) ).toEqual( 5 );
    } );

    it( 'Input: root = [1,2,3,4,5]', function() {
        expect( minDepth( levelArrayToTree( [ 1, 2, 3, 4, 5 ] ) ) ).toEqual( 2 );
    } );
} );
