const isValidBSTArr = require( '../src/leetcode_98' );
const levelArrayToTree = require( '../utils/tree_helper' );

describe( 'Test cases for leetcode_102', () => {

    it( 'Input: [2,1,3]', () => {
        expect( isValidBSTArr( levelArrayToTree( [ 2, 1, 3 ] ) ) ).toEqual( true );
    } );

    it( 'Input: [5,1,4,null,null,3,6]', () => {
        expect( isValidBSTArr( levelArrayToTree( [ 5, 1, 4, null, null, 3, 6 ] ) ) ).toEqual( false );
    } );

    it( 'Input: [10,5,15,null,null,6,20]', () => {
        expect( isValidBSTArr( levelArrayToTree( [ 10, 5, 15, null, null, 6, 20 ] ) ) ).toEqual( false );
    } );

    it( 'Input: [1,1]', () => {
        expect( isValidBSTArr( levelArrayToTree( [ 1, 1 ] ) ) ).toEqual( false );
    } );
} );
