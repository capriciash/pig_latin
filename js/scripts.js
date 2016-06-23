
var vowels = ["a", "e", "i", "o", "u"];
var piglatin = "ay";



// if input.includes(vowels) {
//   alert("contains vowel!");
// }

$(document).ready(function() {
  $("form#blank").submit(function(event) {
    event.preventDefault();

    var input = $("input#phrase").val();

    var firstLetter = input.charAt(0);
    var result = input.concat(piglatin);
    
    if (vowels.includes(firstLetter) === true) {
      console.log(result);
    } else {
      console.log("false");
    };

    // console.log(firstLetter);
    // for (var index = 0; index < vowels.length; index += 1) {
    //   if (vowel[index] === onevowel) {
    //     console.log("true");
    //   } else {
    //     console.log("false");
    //   }
    // };

    });

});

//contains to find out if included in array anywhere

// var first = input.charAt(0);
// var second = input.charAt(1);
