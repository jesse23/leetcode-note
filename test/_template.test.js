const test = require( '../src/_template' );

describe( 'test', function() {
    it( 'Input: n = 2', function() {
        expect( test( 2 ) ).toEqual( 4 );
    } );
} );
