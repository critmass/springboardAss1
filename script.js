// Memory Game assignment from the Springboard Software Engineering Bootcamp
// as completed by Jason Cox 05-2020


// note that all the images are public domain or Creative Commons 1.0
// 
const CARDBACKIMG = 
"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lightning.0257.jpg/320px-Lightning.0257.jpg"
const IMAGEARRAY = [
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Cyprien_Eug%C3%A8ne_Boulet_-_Mulher_do_xale_verde.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Neri_di_Bicci_001.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0a/Genre_scenes._Conversation_at_the_chest_%28Batyukov%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Woodblock_Print%2C_Catching_a_mouse%2C_ca._1800_%28CH_18402429%29.jpg/166px-Woodblock_Print%2C_Catching_a_mouse%2C_ca._1800_%28CH_18402429%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Joseph_Noel_Paton_-_Arming_Christian_for_the_Fight.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jean_Carolus%2C_The_Finishing_Touches%2C_oil_on_canvas%2C_66_x_54_cm.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/What_a_view_%2811173369036%29.jpg/159px-What_a_view_%2811173369036%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Villers_Young_Woman_Drawing.jpg/193px-Villers_Young_Woman_Drawing.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Rogier_van_der_Weyden_-_Portrait_of_a_Woman_with_a_Winged_Bonnet_-_Google_Art_Project.jpg/161px-Rogier_van_der_Weyden_-_Portrait_of_a_Woman_with_a_Winged_Bonnet_-_Google_Art_Project.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Spitfire_IXs_241_Sqn_RAF_south_of_Rome_1944.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dame_in_Gelb_Max_Kurzweil_1907.jpg/241px-Dame_in_Gelb_Max_Kurzweil_1907.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/War_Drawings_by_Muirhead_Bone-_Tanks_Art.IWMREPRO0006847.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/64/Abrams1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Peter_Paul_Rubens_-_Saint_Michael_expelling_Lucifer_and_the_Rebellious_Angels%2C_1622.jpg/203px-Peter_Paul_Rubens_-_Saint_Michael_expelling_Lucifer_and_the_Rebellious_Angels%2C_1622.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5d/Poul_Friis_Nybo_Girl_at_Piano.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Friedrich_Amerling_-_The_Young_Eastern_Woman_-_1991.163_-_Cleveland_Museum_of_Art.tif/lossy-page1-193px-Friedrich_Amerling_-_The_Young_Eastern_Woman_-_1991.163_-_Cleveland_Museum_of_Art.tif.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/The_Industrial_Battle_-_tanks_ready_for_shipment_overseas_Art.IWMARTLD3283.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Utagawa_Toyohiro_-_Woman_Cooling_Herself_-_2018.21_-_Metropolitan_Museum_of_Art.jpg/320px-Utagawa_Toyohiro_-_Woman_Cooling_Herself_-_2018.21_-_Metropolitan_Museum_of_Art.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Aleksije_Lazovi%C4%87_-_Christ%2C_emperor_of_emperors_and_great_archpriest%2C_1819.jpg/182px-Aleksije_Lazovi%C4%87_-_Christ%2C_emperor_of_emperors_and_great_archpriest%2C_1819.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/The_Royal_Air_Force_in_Malta%2C_June_1943_TR1060.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e2/Elijah_slays_the_prophets_of_Baal.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/11/Portrait_of_a_Young_Woman_by_Pierre_Olivier_Joseph_Coomans_1872_MH.jpg"
]


function putCardsOnTable(imgArray) {
  // this function turns an array of file paths to images into
  // DOM elements that makes up a bunch of cards that can be
  // flipped.  Note that this isn't a pure function because it 
  // acts on the DOM and uses CARDBACKIMG, both of which are
  // globe constants.

  const gameContainer = document.getElementById("game")
  gameContainer.classList.add("getting-setup")


  // this doubles the elements then shuffles them, so that there are
  // two of each card so that they can be paired
  const shuffledImages = shuffle( doubleElements( imgArray ) )
  for (let image of shuffledImages) {
    // create a new cardSpot, this is so I can do the flip animation
    const newCardSpot = document.createElement("div");
    newCardSpot.classList.add("card-spot")

    // call a function handleCardClick when a div is clicked on
    newCardSpot.addEventListener("click", handleCardClick);

    newCardSpot.appendChild( createCard( image ) )
    // append the div to the element with an id of game
    gameContainer.append(newCardSpot);
  }
  gameContainer.classList.remove("getting-setup")
}

// this is a array shuffling function provided by Springboard
// using an algorithm called Fisher Yates 
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function doubleElements( arr2dub ){
  // this function doubles the elements in an array note that it 
  // doesn't copy the elements, so it is best to only use primitives
  return arr2dub.reduce( function( newArr, element ){

    newArr.push(element)
    newArr.push(element)
    
    return newArr
  },[])
}

function createCardFace( faceImg, orientation ){
  // this function creates a face for the card
  // breaking out this DOM element like this helps 
  // with making the flip animation in CSS
  const newCardFace = document.createElement("div")
  newCardFace.classList.add( orientation )
  const imageElement = document.createElement("img")
  imageElement.setAttribute("src", faceImg )
  newCardFace.appendChild( imageElement )
  return newCardFace
}

function createCard( cardFaceImage ){
  // this function builds the "card" object which is a bunch of 
  // nested DOM elements that help with the CSS flip animation
  const newCard = document.createElement("div");
  newCard.classList.add("card")
  
  newCard.appendChild( createCardFace( cardFaceImage, "card-front" ) )
  newCard.appendChild( createCardFace( CARDBACKIMG, "card-back" ) )
  
  return newCard
}


function handleCardClick(event) {
  // this function triggers when a card is clicked

  // first, test to see if the card is flipped up, and if it is drop out with a return
  if( this.classList.contains("flipped") ) {return undefined}
  
  // this generates an array of cards which have been flipped
  const flippedUnmatchedCards = document.querySelectorAll(".flipped") 

  // next, test to see if two or more cards are flipped
  // if two or more cards are flipped exit out with a return
  if( flippedUnmatchedCards.length > 1 ) {return undefined}
  // otherwise, flip the card
  else{ this.classList.add("flipped") }

  // now deal with the case that one card was already flipped
  if( flippedUnmatchedCards.length === 1 ){
 
    const thatCard = flippedUnmatchedCards[0]
    // this is to hold "this" element when the bubble continues to bubble
    // when the setTimeout function runs
    const thisCard = this

    if( checkFlippedPairs( thatCard, thisCard ) ){
      // if they are a match update them then check to see if the game is over
      thisCard.classList.replace("flipped", "matched")
      thatCard.classList.replace("flipped", "matched")
      if( checkEndOfGame() ){ endGame() }
    }
    else{
      setTimeout( function(){
        // flip cards over after a period of waiting to view the cards
        // note, don't set the time out function to less than 3000 without changing
        // the CSS
        thisCard.classList.remove("flipped")
        thatCard.classList.remove("flipped")
      }, 4000)
    }
  }
}

function checkEndOfGame(){
  const matchedCards = document.querySelectorAll(".matched")
  const allCards = document.querySelectorAll(".card-spot")
  return matchedCards.length === allCards.length
}

function endGame(){ 
  const youWonSplash = document.querySelector("#you-won-splash")
  youWonSplash.classList.add("win")
  youWonSplash.innerText = "YOU WON"
  setTimeout(() => {
    youWonSplash.addEventListener( "click", function(){
      youWonSplash.innerText = ""
      youWonSplash.classList.remove("win")
    })
  }, 2200);
  
}

function checkFlippedPairs( card1, card2 ){
  // this function checks for matchs and returns true if 
  // they are a matchs
  const img1 = card1.querySelector(".card-front").firstElementChild.getAttribute("src")
  const img2 = card2.querySelector(".card-front").firstElementChild.getAttribute("src")

  return img1 === img2
}

function blingTitle(){
  //  This function blings the title
  setInterval(() => {
    const titleLetters = document.querySelectorAll(".title-letter")
    
    for( let letter of titleLetters ){
      blingLetter( letter )
    }
    blingLetter( document.querySelector("#restart-icon") )
  }, 50);
}

function blingLetter( letter ){
  if( Math.random() > .8 ){
    letter.classList.add("flash")
    setTimeout(() => {
      letter.classList.remove("flash")
    }, 1);
  }
}

// when the DOM loads
document.addEventListener( "DOMContentLoaded", function(){ 
  blingTitle()
  document.querySelector("#restart-icon").addEventListener( "click", function() {
    document.querySelector("#game").innerHTML = ""
    putCardsOnTable( shuffle(IMAGEARRAY).slice(0,9) )
  })
})


