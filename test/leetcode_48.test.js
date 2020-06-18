const rotate = require( '../src/leetcode_48' );

describe( 'Test cases for leetcode_48', () => {

    it( 'rotate for 0*0', () => {
        const fixture = [];
        expect( ( rotate( fixture ), fixture ) ).toEqual( [] );
    } );

    it( 'rotate for 1*1', () => {
        const fixture = [
            [ 1 ]
        ];
        expect( ( rotate( fixture ), fixture ) ).toEqual( [
            [ 1 ]
        ] );
    } );

    it( 'rotate for 2*2', () => {
        const fixture = [
            [ 1, 2 ],
            [ 4, 3 ]
        ];
        expect( ( rotate( fixture ), fixture ) ).toEqual( [
            [ 4, 1 ],
            [ 3, 2 ]
        ] );
    } );

    it( 'OOTB Example 1 (3*3)', () => {
        const fixture = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]
        ];
        expect( ( rotate( fixture ), fixture ) ).toEqual( [
            [ 7, 4, 1 ],
            [ 8, 5, 2 ],
            [ 9, 6, 3 ]
        ] );
    } );

    it( 'OOTB Example 2', () => {
        const fixture = [
            [ 5, 1, 9, 11 ],
            [ 2, 4, 8, 10 ],
            [ 13, 3, 6, 7 ],
            [ 15, 14, 12, 16 ]
        ];
        expect( ( rotate( fixture ), fixture ) ).toEqual( [
            [ 15, 13, 2, 5 ],
            [ 14, 3, 4, 1 ],
            [ 12, 6, 8, 9 ],
            [ 16, 7, 10, 11 ]
        ] );
    } );

} );
