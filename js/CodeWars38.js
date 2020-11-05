// Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.
//
// If there is punctuation, it should be interpreted as a regular character; no special rules.
//
// If there is spacing before/after the input string, leave them there.
//
// String will not be empty.
//
// Examples
// "Hi mom" => "iH mom"
// " A fun little challenge! " => " A nuf elttil !egnellahc "


function reverser(sentence) {
  //seperate the words by the space
  //reverse the order of each word
  //join them back together
  //return sentence

return sentence.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}