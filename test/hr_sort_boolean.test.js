const hr_sort_boolean = require( '../src/hr_sort_boolean' );

describe( 'hr_sort_boolean', function() {
    it( 'Input: [ false, true, false, true]', function() {
        expect( hr_sort_boolean( [ false, true, false, true ] ) ).toEqual( 1 );
    } );

    it( 'Input: [true, true, true, false]', function() {
        expect( hr_sort_boolean( [ true, true, true, false ] ) ).toEqual( 0 );
    } );
} );
