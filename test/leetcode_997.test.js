const findJudge = require( '../src/leetcode_997' );

describe( 'Test cases for leetcode_997', () => {

    it( 'N = 2, trust = [[1,2]] ==> 2', () => {
        expect( findJudge( 2, [
            [ 1, 2 ]
        ] ) ).toEqual( 2 );
    } );

    it( 'N = 3, trust = [[1,3],[2,3]] ==> 2', () => {
        expect( findJudge( 3, [
            [ 1, 3 ],
            [ 2, 3 ]
        ] ) ).toEqual( 3 );
    } );

    it( 'N = 3, trust = [[1,3],[2,3],[3,1]] ==> -1', () => {
        expect( findJudge( 3, [
            [ 1, 3 ],
            [ 2, 3 ],
            [ 3, 1 ]
        ] ) ).toEqual( -1 );
    } );

    it( 'N = 3, trust = [[1,2],[2,3]]', () => {
        expect( findJudge( 3, [
            [ 1, 2 ],
            [ 2, 3 ]
        ] ) ).toEqual( -1 );
    } );

    it( 'N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]', () => {
        expect( findJudge( 4, [
            [ 1, 3 ],
            [ 1, 4 ],
            [ 2, 3 ],
            [ 2, 4 ],
            [ 4, 3 ]
        ] ) ).toEqual( 3 );
    } );

    it( 'N = 1, trust = []', () => {
        expect( findJudge( 1, [] ) ).toEqual( 1 );
    } );
} );
