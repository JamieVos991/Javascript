    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let index2 = randomizer(werkwoordlenght);
        let woord2 = werkwoord[index2];
        let index3 = randomizer(arrayLength);
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["he", "Jamie", "Jan"];
    const werkwoord = ["runs", "learns", "eats", "listens to"];
    const restwoord = ["hard", "at work", "candy", ];
        
    let plaatjes = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/506a4381-5b7d-4b5b-9140-4104665ddf3d/d3yykvh-158c29b8-4f57-416b-bb8f-3cdeb69bd089.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTA2YTQzODEtNWI3ZC00YjViLTkxNDAtNDEwNDY2NWRkZjNkXC9kM3l5a3ZoLTE1OGMyOWI4LTRmNTctNDE2Yi1iYjhmLTNjZGViNjliZDA4OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Lj6nLvk_yRWzZKqqVxaELoH4JcSOEGQaQ9G_ZbYUa8w", "https://i.pinimg.com/originals/70/a9/59/70a959d84ddad5dc8e2fabdaa70e9bb7.jpg", "https://i.pinimg.com/originals/97/bb/cd/97bbcd294dfaed851dd3ccc7f74ee254.jpg", "https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-art-observer.jpg?quality=80"]
    let arrayLength = onderwerp.length;
    let werkwoordlenght = werkwoord.length;