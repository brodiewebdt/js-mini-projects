
// button to submit the users number
const btnSubmit = document.querySelector('.submit')
// paragraph to display the results
const para = document.querySelector('.para')
// array to hold the results of the Fizz Buzz test
const result = [];

btnSubmit.addEventListener('click', function() {
    
    const userInput = document.querySelector('.user-input');
    let answer = userInput.value;
    // Loop from 1 to the entered number
    for (let i = 1; i <= answer; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            // If the current number is divisible by 3 and 5 then print "FizzBuzz"
            result.push('Fizz Buzz');
            // console.log('Fizz Buzz')
        } else if (i % 5 === 0) {
            // If the current number is divisible by 5 then print "Buzz"
            result.push('Buzz');
            // console.log('Buzz')
        } else if (i % 3 === 0) {
            // If the current number is divisible by 3 then print "Fizz"
            result.push('Fizz');
            // console.log('Fizz');
        } else {
            // Otherwise print the current number
            result.push(i);
            // console.log(i);
        }

        userInput.value = "";
        userInput.focus();
    }

    para.textContent = "RESULT: " + result.join(", ");
})




