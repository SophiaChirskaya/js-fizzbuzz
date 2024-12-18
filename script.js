// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (let index = 1; index < 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("Fizzbuzz");
    }

    else if (index % 3 === 0) {
        console.log("Fizz");
    }

    else if (index % 5 === 0) {
        console.log("Buzz");
    }

    else{
        console.log(index);
    }
    
}

