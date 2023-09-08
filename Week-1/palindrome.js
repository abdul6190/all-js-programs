let a = 'Able, was I ere I saw Elba!'


function transform(str){
    let result = '';
    for(let i=0; i<str.length; i++){
        if (str[i] !== ' ' && str[i] !== '?' && str[i] !== '!' && str[i] !== ','){
            result+=str[i];
        }
    }
    return result.toLowerCase();
}

function isPalindrome(str){
    let originalString = transform(str);
    let reverseString = originalString.split("").reverse().join("");
    if(originalString === reverseString){
        console.log('yes');
    }
    else{
        console.log('NO');
    }
}
isPalindrome(a);

