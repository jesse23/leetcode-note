const myAtoi = require( '../src/leetcode_8' );

describe( 'Test cases for leetcode_8', () => {
    it( 'Input: "42", Output: 42', () => {
        expect( myAtoi("42") ).toEqual( 42 );
    } );

    it( 'Input: "   -42", Output: -42', () => {
        expect( myAtoi("   -42") ).toEqual( -42 );
    } );

    it( 'Input: "4193 with words", Output: 4193', () => {
        expect( myAtoi("4193 with words") ).toEqual( 4193 );
    } );

    it( 'Input: "words and 987", Output: 0', () => {
        expect( myAtoi("words and 987") ).toEqual( 0 );
    } );

    it( 'Input: "-91283472332", Output: -2147483648', () => {
        expect( myAtoi("-91283472332") ).toEqual( -2147483648 );
    } );

    it( 'Input: "2147483648", Output: 2147483647', () => {
        expect( myAtoi("2147483648") ).toEqual( 2147483647 );
    } );

    it( 'Input: "2147483646", Output: 2147483646', () => {
        expect( myAtoi("2147483646") ).toEqual( 2147483646 );
    } );


    it( 'Input: "-2147483648", Output: -2147483648', () => {
        expect( myAtoi("-2147483648") ).toEqual( -2147483648 );
    } );

    it( 'Input: "+1", Output: 1', () => {
        expect( myAtoi("+1") ).toEqual( 1 );
    } );



} );
