function checkPalindrome () {
    let palin_input = document.getElementById("palin_input").value;
    // console.log(palin_input);
    let result = document.getElementById("result")
    let reverse = palin_input.split("").reverse().join('')
    // console.log(reverse);
    if(palin_input == '') {
        alert("Please enter a word")
    } 
    else if (palin_input.toLowerCase() == reverse.toLowerCase()) {
        console.log(palin_input, " is a palindrome!");
        result.style.display = "block";
        result.innerHTML = `${palin_input} is a palindrome! `;
    }

    else if (palin_input.toLowerCase() != reverse.toLowerCase()) {
        console.log(palin_input, " is not a Palindrome!");
        result.style.display = "block";
        result.innerHTML = `${palin_input} is not a Palindrome`

    }
}