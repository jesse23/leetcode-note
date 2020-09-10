const fizzBuzz = require( '../src/hr_fizzbuzz' );

describe( 'Test cases for hr_fizzbuzz', () => {
    it( 'n = 15, FizzBuzz', () => {
        expect( fizzBuzz( 15 ) ).toEqual( [
            1,
            2,
            'Fizz',
            4,
            'Buzz',
            'Fizz',
            7,
            8,
            'Fizz',
            'Buzz',
            11,
            'Fizz',
            13,
            14,
            'FizzBuzz'
        ] );
    } );
} );
