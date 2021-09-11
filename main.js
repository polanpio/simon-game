const flickerGreen = document.querySelector(".quarter-green");
const flickerRed = document.querySelector(".quarter-red");
const flickerYellow = document.querySelector(".quarter-yellow");
const flickerBlue = document.querySelector(".quarter-blue");

const buttonSounds = [
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
]

const startSequance = [flickerGreen, flickerRed, flickerBlue, flickerYellow, flickerGreen, flickerRed, flickerBlue, flickerYellow]
const sequence = [flickerGreen];
let sequenceToGuess = [...sequence];
let score = 0;
let highestScore = 0;

const getRandomQuarter = () => {
    const quarters = [
        flickerGreen, flickerRed, flickerBlue, flickerYellow
    ];
    return quarters[parseInt(Math.random() * quarters.length)]
}

const flicker = (quarter) => {
    if (quarter === flickerGreen) {
        return new Promise((resolve, reject) => {
            quarter.classList.add("quarter-green-active")
            buttonSounds[0].play() 
            setTimeout(() => {
                quarter.classList.remove("quarter-green-active");
                setTimeout(() => {
                    resolve();  
                  }, 250)
            }, 750);
        });  
    }
    else if (quarter === flickerRed) {
        return new Promise((resolve, reject) => {
            quarter.classList.add("quarter-red-active") 
            buttonSounds[1].play()
            setTimeout(() => {
                quarter.classList.remove("quarter-red-active");
                setTimeout(() => {
                    resolve();  
                  }, 250)
            }, 750);
        });  
    }
    else if (quarter === flickerYellow) {
        return new Promise((resolve, reject) => {
            quarter.classList.add("quarter-yellow-active")
            buttonSounds[2].play() 
            setTimeout(() => {
                quarter.classList.remove("quarter-yellow-active");
                setTimeout(() => {
                  resolve();  
                }, 250)
            }, 750);
        });  
    }
    else if (quarter === flickerBlue) {
        return new Promise((resolve, reject) => {
            quarter.classList.add("quarter-blue-active")
            buttonSounds[3].play() 
            setTimeout(() => {
                quarter.classList.remove("quarter-blue-active");
                setTimeout(() => {
                    resolve();  
                  }, 250)
            }, 750);
        });  
    }
};

let isClickable = false;

const quarterClicked = (quarterClicked) => {
    if (!isClickable) return;
    const expectedQuarter = sequenceToGuess.shift();
    if (expectedQuarter === quarterClicked) {
        if (sequenceToGuess.length === 0) {
            sequence.push(getRandomQuarter());
            sequenceToGuess = [...sequence];
            setTimeout(() => {
              startFlashing();  
            }, 1000)
            score++
        }
    } else {
        alert("Game Over!");
        isClickable = false;
        if (score > highestScore) highestScore = score;
        score = 0;
        sequence.length = 0;
        sequence.push(flickerGreen)
        sequenceToGuess = [...sequence]
    }
    
}

const startFlashing = async () =>  {
    isClickable = false;
    for (const element of sequence){
       await flicker(element);
    }
     isClickable = true;
}

const main = async () => {
    // isClickable = false;
    // for (const element of startSequance){
    //     await flicker(element);
    //  }
    startFlashing();
}

function playSound(quarter) {
        let sound;
        if (!isClickable) return;
        switch(quarter) {
          case 'btn-green':
            sound = buttonSounds[0];
            flickerGreen.classList.add("quarter-green-active")
            window.setTimeout(function(){
            flickerGreen.classList.remove("quarter-green-active")
            }, 500);
          break;
          case 'btn-red':
            sound = buttonSounds[1];
            flickerRed.classList.add("quarter-red-active")
            window.setTimeout(function(){
            flickerRed.classList.remove("quarter-red-active")
            }, 500);
            break;
          case 'btn-yellow':
            sound = buttonSounds[2];
            flickerYellow.classList.add("quarter-yellow-active")
            window.setTimeout(function(){
            flickerYellow.classList.remove("quarter-yellow-active")
            }, 500);
          break;
          case 'btn-blue':
            sound = buttonSounds[3];
            flickerBlue.classList.add("quarter-blue-active")
            window.setTimeout(function(){
            flickerBlue.classList.remove("quarter-blue-active")
            }, 500);
          break;
        }
        sound.play();
    }

    // Event handlers for every quarter 
    flickerGreen.addEventListener("click", function () {playSound(this.id)})
    flickerRed.addEventListener("click", function () {playSound(this.id)})
    flickerBlue.addEventListener("click", function () {playSound(this.id)})
    flickerYellow.addEventListener("click", function () {playSound(this.id)})

    function showHigestScore(highestScore) {
        let ones = Math.floor(highestScore % 10);
        let tens = Math.floor(highestScore/10 % 10);
    } 
        
    
  function toStringAndCharAt(ntn, number) {
    return parseInt(number.toString().charAt(ntn))
  }


// main()


// function startBlinking() {
//     window.setInterval(blinking,1000);
//  }
 
//  function blinking() {
//     // let classString = `${currentFlicker.className.match(/quarter-.+/).join("")}-active`
//     flickerGreen.classList.add("quarter-green-active")
//     window.setTimeout(function(){
//     flickerGreen.classList.remove("quarter-green-active")
//     }, 500);
//  }

// //  startBlinking()
// blinking(sequence[0])
// blinking(sequence[1])
// blinking(sequence[2])

 

 
