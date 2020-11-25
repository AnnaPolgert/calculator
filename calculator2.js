var buttons = document.querySelectorAll(".calc-button");
var screen = document.querySelector(".calc-screen");
var currentNumber; //zmienna przechowuje aktualną liczbę

var printToScreen = function(text) {
   screen.innerText = text;
}

// buttons[3].addEventListener("click", function(event) {
//    var value = parseInt(event.target.innerText)
//    printToScreen(value);
// });

buttons.forEach(function(btn) {
   btn.addEventListener("click", function(event) {
      var value = parseInt(event.target.innerText);
      // ten if wykona się jeżeli wciśnięty guzik będzie liczbą
      if(!isNaN(value)) {
         if(currentNumber){
            // do aktualnej liczby dopisujemy na końcu dodatkową cyfrę
            currentNumber = currentNumber.toString() + value.toString();
         } else {
            currentNumber = value.toString();
         }
         printToScreen(currentNumber);
      } else if(event.target.innerText === "C") {
         currentNumber = 0;
         printToScreen("0");
      } else if(event.target.innerText === "←") {
         if(currentNumber.length === 1) {
            currentNumber = 0;
         }
         else if(currentNumber) {
            currentNumber  = currentNumber.substring(0, currentNumber.length -1);
         }
        printToScreen(currentNumber);
      }
   })
})

// Zad. Dom.
// wypocząć, strzałeczkę w tył obsłużyć ;P będzie to polegało na tym że z currentnumber usuwać ostatnioą cyferkę, pamiętaj ż to string!!! :O



// var tablica2 = ['Ania', 'Bitels', 'Dupa', 'Ania2', 'Lukasz', 'Test'];

// tablica2.forEach(function(element) {
//   console.log(element);
// });

// console.log(tablica2[0]);
// console.log(tablica2[1]);
// console.log(tablica2[2]);


// printToScreen('Bitels');

// var liczba = '7';
// var liczba2 = '8';

// var suma = parseInt(liczba) + parseInt(liczba2);
// console.log(suma);


// console.log(typeof liczba);
// console.log(typeof napis);


// var testObject = {
//   name: 'Lukasz',
//   surname: 'Modelski',
//   age: '29',
//   target: {
//     innerText: 'test text'
//   }
// }

// console.log(testObject);

// var tablica = ['Ania', 'Bitels', 'Dupa'];
// console.log(tablica);
// console.log(tablica[2]);