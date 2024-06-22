const notes = `
    1) not able to figure out the calculation part 
    2) the main problem is the endless calls or cycle beacuse of the useffect 
    3) toFixed
    Purpose: Converts a number to a string, keeping a specified number of decimals.
    let num = 3.14159;
    console.log(num.toFixed(2)); // "3.14"
    console.log(num.toFixed(0)); // "3"
    console.log(num.toFixed(5)); // "3.14159"
    The result is returned as a string, not a number.   
    4) Math.round
    Purpose: Rounds a number to the nearest integer.
    let num = 3.14159;
    console.log(Math.round(num)); // 3
    console.log(Math.round(3.5)); // 4
    console.log(Math.round(3.49)); // 3
    The result is returned as a number.

    5) needed comma with proper places , ued regex + google in the interview 

    6) The nullish coalescing operator (??) in JavaScript is a logical operator that provides a way to handle null or undefined values.
     It is used to return the right-hand operand when the left-hand operand is null or undefined, 
     and otherwise returns the left-hand operand. This is particularly useful for providing default values in
      a clear and concise manner.

    Syntax
    javascript
    Copy code
    result = a ?? b;
    no need of ternary poertor 
`