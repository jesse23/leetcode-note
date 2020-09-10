// Hacker Rank - fizzBuzz

var fizzBuzz = function( n ) {
    const res = [];

    let nextThree = 3;
    let nextFive = 5;

    for( let i = 1; i < n + 1; i++ ) {
        const temp = [];

        if( i === nextThree ) {
            temp.push( 'Fizz' );
            nextThree += 3;
        }

        if( i === nextFive ) {
            temp.push( 'Buzz' );
            nextFive += 5;
        }

        // console.log( temp.length > 0 ? temp.join( '' ) : n );
        res.push( temp.length > 0 ? temp.join( '' ) : i );
    }
    return res;
};

var fizzBuzz2 = function( n ) {
    const res = [];

    for( let i = 1; i < n + 1; i++ ) {
        const temp = [];

        if( i % 3 === 0 ) {
            temp.push( 'Fizz' );
        }

        if( i % 5 === 0 ) {
            temp.push( 'Buzz' );
        }

        // console.log( temp.length > 0 ? temp.join( '' ) : n );
        res.push( temp.length > 0 ? temp.join( '' ) : i );
    }
    return res;
};

module.exports = fizzBuzz;
