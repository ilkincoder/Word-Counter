// Getting the dom elements

text = document.getElementById('area');
word = document.getElementById('word');
char = document.getElementById('char');


// On input implementing function


text.addEventListener('input', function(){

// Updating character count using DOM Manupilation

let characters = this.value;
char.textContent = characters.length;

//Removing spaces from beginning and end

characters.trim();

//  create andreturn array of singular words using (/\s/) - regex pattern

let wordlist = characters.split(/\s/);

let words = wordlist.filter(function(element){
    return element != "";
})


word.textContent = words.length;

})





























