//points 
let NextCardHigher = document.querySelector('#higher'); 
let NextCardLower = document.querySelector('#lower'); 
let NextCardEqual = document.querySelector('#equal');
let attemptsDom = document.querySelector('.attempts');
let scoreDom = document.querySelector('.score');

let cardDeck = []; 
let cards = ['clubs','hearts', 'diamonds', 'spades'];

    //render the cards 
            cards.forEach(card =>{
                for (let num = 2; num <= 14; num++) {
                    let typeCardArr = [card, num];
                    cardDeck.push(typeCardArr);
                }
            }); 

            //viewing the array content which contains array of 2 objects 
            
 let cardGeneral = cardDeck[Math.floor(Math.random() * cardDeck.length)][1]; 
 let points = 0; 
 let numberOfTrys = 3; 
// cardDeck.forEach(card => {console.log(card[1])});

NextCardHigher.addEventListener('click', ()=> {
    let randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)][1];
    
        if(randomCard > cardGeneral){
            console.log(`randomCard:${randomCard} is Higher than CardGeneral ${cardGeneral} `);
            points++;
            scoreDom.innerText = points; 

        }else {
            console.log(`randomCard:${randomCard} is  not Higher than CardGeneral ${cardGeneral}`);
            numberOfTrys--;
            attemptsDom.innerText = numberOfTrys;  
        }
    
        cardGeneral = cardDeck[Math.floor(Math.random() * cardDeck.length)][1];
});


NextCardLower.addEventListener('click', ()=> {
    let randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)][1];
    
    if(randomCard < cardGeneral){
        points++; 
        scoreDom.innerText = points; 

        console.log(`randomCard:${randomCard} is Lower than CardGeneral ${cardGeneral} `);
        
    }else {
        console.log(`randomCard:${randomCard} is not Lower than CardGeneral ${cardGeneral} `);
        numberOfTrys--; 
        attemptsDom.innerText = numberOfTrys; 
    }

    cardGeneral = cardDeck[Math.floor(Math.random() * cardDeck.length)][1];

});



NextCardEqual.addEventListener('click', ()=> {
    let randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)][1];
    
        if(randomCard == cardGeneral){
            console.log(`randomCard:${randomCard} is Equal than CardGeneral ${cardGeneral} `);
            points++;
            scoreDom.innerText = points; 

        }else {
            console.log(`randomCard:${randomCard} is  not Equal than CardGeneral ${cardGeneral} `);
            numberOfTrys--; 
            attemptsDom.innerText = numberOfTrys; 
        }
    
        cardGeneral = cardDeck[Math.floor(Math.random() * cardDeck.length)][1];

});

