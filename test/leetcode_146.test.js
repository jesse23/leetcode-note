const process = require( '../src/leetcode_146' );

describe( 'test', function() {
    it( 'Input: Test case 1', function() {
        expect( process( [ "LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get" ], [
            [ 2 ],
            [ 1, 1 ],
            [ 2, 2 ],
            [ 1 ],
            [ 3, 3 ],
            [ 2 ],
            [ 4, 4 ],
            [ 1 ],
            [ 3 ],
            [ 4 ]
        ] ) ).toEqual( [ null, null, null, 1, null, -1, null, -1, 3, 4 ] );
    } );
} );
