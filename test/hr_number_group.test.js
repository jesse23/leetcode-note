const groupNumber = require( '../src/hr_number_group' );

describe( 'hr_number_group', function() {
    it( 'Input: group = [3, 4, 3, 6, 2, 5]', function() {
        expect( groupNumber( [ 3, 4, 3, 6, 2, 5 ], 3, 2 ) ).toEqual( 2 );
    } );

    it( 'Input: group = [1, 4, 6, 7, 8, 9]', function() {
        expect( groupNumber( [ 1, 4, 6, 7, 8, 9 ], 3, 2 ) ).toEqual( 1 );
    } );
} );
