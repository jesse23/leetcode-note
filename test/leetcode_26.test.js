const removeDuplicates = require( '../src/leetcode_26' );

describe( 'Leetcode 727', () => {

    it( 'Given [1,2,3,4], expect 4', () => {
        const fixture = [ 1, 2, 3, 4 ];
        expect( removeDuplicates( fixture ) ).toEqual( 4 );
        expect( ( fixture.splice( 4 ), fixture ) ).toEqual( [ 1, 2, 3, 4 ] );
    } );

    it( 'Given [1,1], expect 1', () => {
        const fixture = [ 1, 1 ];
        expect( removeDuplicates( fixture ) ).toEqual( 1 );
        expect( ( fixture.splice( 1 ), fixture ) ).toEqual( [ 1 ] );
    } );

    it( 'Given [1,1,2], expect 2', () => {
        const fixture = [ 1, 1, 2 ];
        expect( removeDuplicates( fixture ) ).toEqual( 2 );
        expect( ( fixture.splice( 2 ), fixture ) ).toEqual( [ 1, 2 ] );
    } );

    it( 'Given [0,0,1,1,1,2,2,3,3,4], expect 2', () => {
        const fixture = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
        expect( removeDuplicates( fixture ) ).toEqual( 5 );
        expect( ( fixture.splice( 5 ), fixture ) ).toEqual( [ 0, 1, 2, 3, 4 ] );
    } );

    it( 'Given [], expect 0', () => {
        const fixture = [];
        expect( removeDuplicates( fixture ) ).toEqual( 0 );
        expect( ( fixture.splice( 0 ), fixture ) ).toEqual( [] );
    } );
} );
