const firstUniqChar = require( '../src/leetcode_387' );

describe( 'Test cases for leetcode_387', () => {

    it( 'Given "leetcode", expect 0', () => {
        expect( firstUniqChar( 'leetcode' ) ).toEqual( 0 );
    } );

    it( 'Given "loveleetcode", expect 2', () => {
        expect( firstUniqChar( 'loveleetcode' ) ).toEqual( 2 );
    } );
} );
