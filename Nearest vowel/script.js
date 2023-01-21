function nearestValue(letter){
    var alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    char = letter.toLowerCase()
    var charIndex = alphabets.indexOf(char);
    console.log(charIndex);
    if(charIndex<=3){
       var vowel = "a";
    }
    else if(charIndex>3 && charIndex<=6){
       var vowel = "e";
    }
    else if(charIndex>6 && charIndex<=11){
       var vowel = "i";
    }
    else if(charIndex>11 && charIndex<=17){
       var vowel = "o";
    }
    else if(charIndex>17 && charIndex<=25){
       var vowel = "u";
    }
    document.getElementById("result").value=vowel.toUpperCase();
    
}