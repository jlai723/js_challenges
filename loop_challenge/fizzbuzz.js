/*
for a range of numbers (1 .. 100):
    if the number is divisible evenly by:
        3 -> fizz
        5 -> buzz
        3 & 5 -> fizzBuzz
        otherwise -> print the number
    1
    2
    fizz
    4
    buzz
    ..
    14
    fizzBuzz
    ..
    100

1) Bronze: if you solve it with a for loop and if statements
2) Silver: if you solve it with a while loop and switch
3) Gold: if you solve it with a for loop and ternaries
*/

// Bronze

for (let x = 1; x <= 100; x++){
    if (x % 3 === 0 && x % 5 === 0){
        console.log("fizzBuzz");
    } else if (x % 3 === 0){
        console.log("fizz");
    } else if (x % 5 === 0){
        console.log("buzz");
    } else {
        console.log(x);
    }
}

// Silver

let y = 1;
while (y <= 100){
    switch (true){
        case y % 3 === 0 && y % 5 === 0:
            console.log("fizzBuzz");
            break;
        case y % 3 === 0:
            console.log("fizz");
            break;
        case y % 5 === 0:
            console.log("buzz");
            break;
        default:
            console.log(y);
    }
    y++;
}

// Gold

for (let z = 1; z <= 100; z++){
    z % 3 === 0 && z % 5 === 0 ? console.log("fizzBuzz") :
    z % 3 === 0 ? console.log("fizz") :
    z % 5 === 0 ? console.log("buzz") :
    console.log(z);
}

// Food for thought - best solution because computers can read it fastest (less levels to go through)

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0){
        if (i % 5 === 0) console.log("fizzBuzz");
        else console.log("fizz");
    }
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);
}