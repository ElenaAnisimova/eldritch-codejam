const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');

const ancientsCardsContainer = document.querySelector('.ancients-container');
const allAncientCards = document.querySelectorAll('.ancient-card');

const difficultyButtonsContainer = document.querySelector('.difficulty-container');
const allDifficultiesButtons = document.querySelectorAll('.difficulty');
const normalDifficulty = document.querySelector('.normal');
const rightPart = document.querySelector('.right-part');

const shuffleButton = document.querySelector('.shuffle-button');
const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');

const dotGreenOne = document.querySelector('.dot-green-one');
const dotBrownOne = document.querySelector('.dot-brown-one');
const dotBlueOne = document.querySelector('.dot-blue-one');

const dotGreenTwo = document.querySelector('.dot-green-two');
const dotBrownTwo = document.querySelector('.dot-brown-two');
const dotBlueTwo = document.querySelector('.dot-blue-two');

const dotGreenThree = document.querySelector('.dot-green-three');
const dotBrownThree = document.querySelector('.dot-brown-three');
const dotBlueThree = document.querySelector('.dot-blue-three');

const stageTextOne = document.querySelector('.stage-text-one');
const stageTextTwo = document.querySelector('.stage-text-two');
const stageTextThree = document.querySelector('.stage-text-three');

const ancientsData = [
    {
        id: 'azathoth',
        name: 'azathoth',
        firstStage: {
            greenCards: 1,
            brownCards: 2,
            blueCards: 1,
        },
        secondStage: {
            greenCards: 2,
            brownCards: 3,
            blueCards: 1,
        },
        thirdStage: {
            greenCards: 2,
            brownCards: 4,
            blueCards: 0,
        },
    },
    {
        id: 'cthulhu',
        name: 'cthulhu',
        firstStage: {
            greenCards: 0,
            brownCards: 2,
            blueCards: 2,
        },
        secondStage: {
            greenCards: 1,
            brownCards: 3,
            blueCards: 0,
        },
        thirdStage: {
            greenCards: 3,
            brownCards: 4,
            blueCards: 0,
        },
    },
    {
        id: 'iogSothoth',
        name: 'iogSothoth',
        firstStage: {
            greenCards: 0,
            brownCards: 2,
            blueCards: 1,
        },
        secondStage: {
            greenCards: 2,
            brownCards: 3,
            blueCards: 1,
        },
        thirdStage: {
            greenCards: 3,
            brownCards: 4,
            blueCards: 0,
        },
    },
    {
        id: 'shubNiggurath',
        name: 'shubNiggurath',
        firstStage: {
            greenCards: 1,
            brownCards: 2,
            blueCards: 1,
        },
        secondStage: {
            greenCards: 3,
            brownCards: 2,
            blueCards: 1,
        },
        thirdStage: {
            greenCards: 2,
            brownCards: 4,
            blueCards: 0,
        },
    },]

const cardsDataGreen = [
    {
        id: 'green1',
        cardFace: "../assets/MythicCards/green/green1.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green2',
        cardFace: "../assets/MythicCards/green/green2.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green3',
        cardFace: "../assets/MythicCards/green/green3.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green4',
        cardFace: "../assets/MythicCards/green/green4.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green5',
        cardFace: "../assets/MythicCards/green/green5.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green6',
        cardFace: "../assets/MythicCards/green/green6.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green7',
        cardFace: "../assets/MythicCards/green/green7.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green8',
        cardFace: "../assets/MythicCards/green/green8.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green9',
        cardFace: "../assets/MythicCards/green/green9.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green10',
        cardFace: "../assets/MythicCards/green/green10.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green11',
        cardFace: "../assets/MythicCards/green/green11.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green12',
        cardFace: "../assets/MythicCards/green/green12.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green13',
        cardFace: "../assets/MythicCards/green/green13.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green14',
        cardFace: "../assets/MythicCards/green/green14.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green15',
        cardFace: "../assets/MythicCards/green/green15.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green16',
        cardFace: "../assets/MythicCards/green/green16.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green17',
        cardFace: "../assets/MythicCards/green/green17.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green18',
        cardFace: "../assets/MythicCards/green/green18.png",
        difficulty: 'easy',
        color: 'green'
    },
]
const cardsDataBrown = [
    {
        id: 'brown1',
        cardFace: "../assets/MythicCards/brown/brown1.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown2',
        cardFace: "../assets/MythicCards/brown/brown2.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown3',
        cardFace: "../assets/MythicCards/brown/brown3.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown4',
        cardFace: "../assets/MythicCards/brown/brown4.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown5',
        cardFace: "../assets/MythicCards/brown/brown5.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown6',
        cardFace: "../assets/MythicCards/brown/brown6.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown7',
        cardFace: "../assets/MythicCards/brown/brown7.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown8',
        cardFace: "../assets/MythicCards/brown/brown8.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown9',
        cardFace: "../assets/MythicCards/brown/brown9.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown10',
        cardFace: "../assets/MythicCards/brown/brown10.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown11',
        cardFace: "../assets/MythicCards/brown/brown11.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown12',
        cardFace: "../assets/MythicCards/brown/brown12.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown13',
        cardFace: "../assets/MythicCards/brown/brown13.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown14',
        cardFace: "../assets/MythicCards/brown/brown14.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown15',
        cardFace: "../assets/MythicCards/brown/brown15.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown16',
        cardFace: "../assets/MythicCards/brown/brown16.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown17',
        cardFace: "../assets/MythicCards/brown/brown17.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown18',
        cardFace: "../assets/MythicCards/brown/brown18.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown19',
        cardFace: "../assets/MythicCards/brown/brown19.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown20',
        cardFace: "../assets/MythicCards/brown/brown20.png",
        difficulty: 'normal',

        color: 'brown'
    },
    {
        id: 'brown21',
        cardFace: "../assets/MythicCards/brown/brown21.png",
        difficulty: 'easy',
        color: 'brown'
    },
]
const cardsDataBlue = [
    {
        id: 'blue1',
        cardFace: "../assets/MythicCards/blue/blue1.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue2',
        cardFace: "../assets/MythicCards/blue/blue2.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue3',
        cardFace: "../assets/MythicCards/blue/blue3.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue4',
        cardFace: "../assets/MythicCards/blue/blue4.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue5',
        cardFace: "../assets/MythicCards/blue/blue5.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue6',
        cardFace: "../assets/MythicCards/blue/blue6.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue7',
        cardFace: "../assets/MythicCards/blue/blue7.png",
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue8',
        cardFace: "../assets/MythicCards/blue/blue8.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue9',
        cardFace: "../assets/MythicCards/blue/blue9.png",
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue10',
        cardFace: "../assets/MythicCards/blue/blue10.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue11',
        cardFace: "../assets/MythicCards/blue/blue11.png",
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue12',
        cardFace: "../assets/MythicCards/blue/blue12.png",
        difficulty: 'normal',
        color: 'blue'
    },
];

// Add/remove elements on click, event listeners //

const removeClassAncients = () => {
    for (let item of allAncientCards) {
        item.classList.remove('active-ancient')
    }
};

const chooseAncient = (e) => {
    e.target.classList.add('active-ancient')
};

const removeClassDifficulty = () => {
    for (let item of allDifficultiesButtons) {
        item.classList.remove('difficulty-active')
    }
};

const chooseDifficulty = (e) => {
    e.target.classList.add('difficulty-active')
};

ancientsCardsContainer.addEventListener('click', removeClassAncients);
ancientsCardsContainer.addEventListener('click', chooseAncient);
ancientsCardsContainer.addEventListener('click', () => { difficultyButtonsContainer.classList.remove('not-active') });
difficultyButtonsContainer.addEventListener('click', removeClassDifficulty,);
difficultyButtonsContainer.addEventListener('click', chooseDifficulty);
difficultyButtonsContainer.addEventListener('click', () => { shuffleButton.classList.remove('not-active-display-none') });
difficultyButtonsContainer.addEventListener('click', () => { rightPart.classList.add('not-active-display-none') });
shuffleButton.addEventListener('click', () => { rightPart.classList.remove('not-active-display-none') });
shuffleButton.addEventListener('click', () => { shuffleButton.classList.add('not-active-display-none') });


// Shuffle-function //
const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random());
};

// Variables //
let ancientNumber;
let n1Green;
let n2Green;
let n3Green;
let n1Brown;
let n2Brown;
let n3Brown;
let n1Blue;
let n2Blue;
let n3Blue;
let n2GreenAcc;
let n3GreenAcc;
let n2BrownAcc;
let n3BrownAcc;
let n2BlueAcc;
let n3BlueAcc;
let withoutEasyGreen;
let withoutEasyBrown;
let withoutEasyBlue;
let withoutHardGreen;
let withoutHardBrown;
let withoutHardBlue;
let easyGreen;
let easyBrown;
let easyBlue;
let normalGreen;
let normalBrown;
let normalBlue;
let hardGreen;
let hardBrown;
let hardBlue;
let forVeryEasyGreen;
let forVeryEasyBrown;
let forVeryEasyBlue;
let forVeryHardGreen;
let forVeryHardBrown;
let forVeryHardBlue;
let textContentGreenOne;
let textContentBrownOne;
let textContentBlueOne;
let textContentGreenTwo;
let textContentBrownTwo;
let textContentBlueTwo;
let textContentGreenThree;
let textContentBrownThree;
let textContentBlueThree;

const setCardTracker = () => {
    dotGreenOne.textContent = textContentGreenOne;
    dotBrownOne.textContent = textContentBrownOne;
    dotBlueOne.textContent = textContentBlueOne;
    dotGreenTwo.textContent = textContentGreenTwo;
    dotBrownTwo.textContent = textContentBrownTwo;
    dotBlueTwo.textContent = textContentBlueTwo;
    dotGreenThree.textContent = textContentGreenThree;
    dotBrownThree.textContent = textContentBrownThree;
    dotBlueThree.textContent = textContentBlueThree;
};

shuffleButton.addEventListener('click', setCardTracker);

const chooseAncientNumber = () => {
    ancientsCardsContainer.addEventListener('click', (el) => {
        if (el.target.classList.contains('azathoth')) {
            ancientNumber = 0;
        }
        else if (el.target.classList.contains('cthulthu')) {
            ancientNumber = 1;
        }
        else if (el.target.classList.contains('iogSothoth')) {
            ancientNumber = 2;
        }
        else if (el.target.classList.contains('shubNiggurath')) {
            ancientNumber = 3;
        }

        // Number of cards for Ancients for every stage //
        n1Green = ancientsData[ancientNumber].firstStage.greenCards;
        n1Brown = ancientsData[ancientNumber].firstStage.brownCards;
        n1Blue = ancientsData[ancientNumber].firstStage.blueCards;
        n2Green = ancientsData[ancientNumber].secondStage.greenCards;
        n2Brown = ancientsData[ancientNumber].secondStage.brownCards;
        n2Blue = ancientsData[ancientNumber].secondStage.blueCards;
        n3Green = ancientsData[ancientNumber].thirdStage.greenCards;
        n3Brown = ancientsData[ancientNumber].thirdStage.brownCards;
        n3Blue = ancientsData[ancientNumber].thirdStage.blueCards;
        n2GreenAcc = n1Green + ancientsData[ancientNumber].secondStage.greenCards;
        n2BrownAcc = n1Brown + ancientsData[ancientNumber].secondStage.brownCards;
        n2BlueAcc = n1Blue + ancientsData[ancientNumber].secondStage.blueCards;
        n3GreenAcc = n2GreenAcc + ancientsData[ancientNumber].thirdStage.greenCards;
        n3BrownAcc = n2BrownAcc + ancientsData[ancientNumber].thirdStage.brownCards;
        n3BlueAcc = n2BlueAcc + ancientsData[ancientNumber].thirdStage.blueCards;

        // Sort card arrays by difficulty //
        withoutEasyGreen = cardsDataGreen.filter(item => item.difficulty !== 'easy');
        withoutEasyBrown = cardsDataBrown.filter(item => item.difficulty !== 'easy');
        withoutEasyBlue = cardsDataBlue.filter(item => item.difficulty !== 'easy');
        withoutHardGreen = cardsDataGreen.filter(item => item.difficulty !== 'hard');
        withoutHardBrown = cardsDataBrown.filter(item => item.difficulty !== 'hard');
        withoutHardBlue = cardsDataBlue.filter(item => item.difficulty !== 'hard');
        easyGreen = cardsDataGreen.filter(item => item.difficulty === 'easy');
        easyBrown = cardsDataBrown.filter(item => item.difficulty === 'easy');
        easyBlue = cardsDataBlue.filter(item => item.difficulty === 'easy');
        normalGreen = cardsDataGreen.filter(item => item.difficulty === 'normal');
        normalBrown = cardsDataBrown.filter(item => item.difficulty === 'normal');
        normalBlue = cardsDataBlue.filter(item => item.difficulty === 'normal');
        hardGreen = cardsDataGreen.filter(item => item.difficulty === 'hard');
        hardBrown = cardsDataBrown.filter(item => item.difficulty === 'hard');
        hardBlue = cardsDataBlue.filter(item => item.difficulty === 'hard');
        forVeryEasyGreen = [...easyGreen, ...shuffleArray(normalGreen).slice(0, n3GreenAcc - easyGreen.length)];
        forVeryEasyBrown = [...easyBrown, ...shuffleArray(normalBrown).slice(0, n3BrownAcc - easyBrown.length)];
        forVeryEasyBlue = [...easyBlue, ...shuffleArray(normalBlue).slice(0, n3BlueAcc - easyBlue.length)];
        forVeryHardGreen = [...hardGreen, ...shuffleArray(normalGreen).slice(0, n3GreenAcc - hardGreen.length)];
        forVeryHardBrown = [...hardBrown, ...shuffleArray(normalBrown).slice(0, n3BrownAcc - hardBrown.length)];
        forVeryHardBlue = [...hardBlue, ...shuffleArray(normalBlue).slice(0, n3BlueAcc - hardBlue.length)]

        textContentGreenOne = n1Green;
        textContentBrownOne = n1Brown;
        textContentBlueOne = n1Blue;
        textContentGreenTwo = n2Green;
        textContentBrownTwo = n2Brown;
        textContentBlueTwo = n2Blue;
        textContentGreenThree = n3Green;
        textContentBrownThree = n3Brown;
        textContentBlueThree = n3Blue;
    })
};
chooseAncientNumber();

// Number cards for Ancients for every stage //




// Cards sorted by diffciculty //
const sortCardsByDifficulty = () => {
};

//FUNCTIONS//

// Shuffling cards arrays for every difficulty //

let greenArrayShuffled;
let brownArrayShuffled;
let blueArrayShuffled;

const finalDeckVeryEasyFunction = () => {
    greenArrayShuffled = shuffleArray(forVeryEasyGreen);
    brownArrayShuffled = shuffleArray(forVeryEasyBrown);
    blueArrayShuffled = shuffleArray(forVeryEasyBlue);
    return finalDeckForThisDifficulty();
};
const finalDeckEasyFunction = () => {
    greenArrayShuffled = shuffleArray(withoutHardGreen);
    brownArrayShuffled = shuffleArray(withoutHardBrown);
    blueArrayShuffled = shuffleArray(withoutHardBlue);
    return finalDeckForThisDifficulty();
};
const finalDeckNormalFunction = () => {
    greenArrayShuffled = shuffleArray(cardsDataGreen);
    brownArrayShuffled = shuffleArray(cardsDataBrown);
    blueArrayShuffled = shuffleArray(cardsDataBlue);
    return finalDeckForThisDifficulty();
};
const finalDeckHardFunction = () => {
    greenArrayShuffled = shuffleArray(withoutEasyGreen);
    brownArrayShuffled = shuffleArray(withoutEasyBrown);
    blueArrayShuffled = shuffleArray(withoutEasyBlue);
    return finalDeckForThisDifficulty();
};
const finalDeckVeryHardFunction = () => {
    greenArrayShuffled = shuffleArray(forVeryHardGreen);
    brownArrayShuffled = shuffleArray(forVeryHardBrown);
    blueArrayShuffled = shuffleArray(forVeryHardBlue);
    return finalDeckForThisDifficulty();
};

// Calling a shuffle function depending on difficulty button click //
let finalDeck;
const finalDeckForThisDifficulty = () => {
    const finalDeckGreenOne = greenArrayShuffled.slice(0, n1Green);
    const finalDeckBrownOne = brownArrayShuffled.slice(0, n1Brown);
    const finalDeckBlueOne = blueArrayShuffled.slice(0, n1Blue);
    const finalDeckOne = [...finalDeckGreenOne, ...finalDeckBrownOne, ...finalDeckBlueOne];
    const finalDeckOneShuffled = shuffleArray(finalDeckOne);
    const finalDeckGreenTwo = greenArrayShuffled.slice(n1Green, n2GreenAcc);
    const finalDeckBrownTwo = brownArrayShuffled.slice(n1Brown, n2BrownAcc);
    const finalDeckBlueTwo = blueArrayShuffled.slice(n1Blue, n2BlueAcc);
    const finalDeckTwo = [...finalDeckGreenTwo, ...finalDeckBrownTwo, ...finalDeckBlueTwo];
    const finalDeckTwoShuffled = shuffleArray(finalDeckTwo);
    const finalDeckGreenThree = greenArrayShuffled.slice(n2GreenAcc, n3GreenAcc);
    const finalDeckBrownThree = brownArrayShuffled.slice(n2BrownAcc, n3BrownAcc);
    const finalDeckBlueThree = blueArrayShuffled.slice(n2BlueAcc, n3BlueAcc);
    const finalDeckThree = [...finalDeckGreenThree, ...finalDeckBrownThree, ...finalDeckBlueThree];
    const finalDeckThreeShuffled = shuffleArray(finalDeckThree);
    const finalDeck = [...finalDeckOneShuffled, ...finalDeckTwoShuffled, ...finalDeckThreeShuffled];
    return finalDeck;
};

function getArray() {
    difficultyButtonsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('normal')) {
            finalDeck = finalDeckNormalFunction();
        } else if (e.target.classList.contains('easy')) {
            finalDeck = finalDeckEasyFunction();
        } else if (e.target.classList.contains('hard')) {
            finalDeck = finalDeckHardFunction();
        } else if (e.target.classList.contains('very-easy')) {
            finalDeck = finalDeckVeryEasyFunction();
        } else if (e.target.classList.contains('very-hard')) {
            finalDeck = finalDeckVeryHardFunction();
        }
        console.log(finalDeck)

        console.log(finalDeck.forEach((item => { console.log(item.color, item.difficulty) })));
    })

};
getArray();

// Last card background function //
let deckImgNumber = -1;
const setCardBg = () => {
    lastCard.style.backgroundSize = 'cover';
    lastCard.style.backgroundImage = `url(${(finalDeck[deckImgNumber].cardFace)})`;
}

// Next last card on click //
const showNextCard = () => {
    if (deckImgNumber < finalDeck.length - 1) {
        deckImgNumber++
    } else {
        lastCard.style.backgroundImage = `url(${(finalDeck[deckImgNumber].cardFace)})`;
    }
    setCardBg();
};

// Deck tracker indicators //
// Deck tracker indicators text //






// Deck tracker stages text showing the stage is done //
const stageOneTextDone = () => {
    if (textContentGreenOne === 0 && textContentBrownOne === 0 && textContentBlueOne === 0) {
        stageTextOne.classList.add('stage-text-done')
    }
};
const stageTwoTextDone = () => {
    if (textContentGreenTwo === 0 && textContentBrownTwo === 0 && textContentBlueTwo === 0) {
        stageTextTwo.classList.add('stage-text-done')
    }
};
const stageThreeTextDone = () => {
    if (textContentGreenThree === 0 && textContentBrownThree === 0 && textContentBlueThree === 0) {
        stageTextThree.classList.add('stage-text-done');
    }
};

// Last card dissappering after deck is over //
const lastCardShow = () => {
    if (deckImgNumber === (finalDeck.length - 1)) {
        deck.classList.add('not-active')
    }
}

// Deck tracker function //
const changeCardTracker = () => {

    if (deckImgNumber < (n1Green + n1Blue + n1Brown)) {
        if (finalDeck[deckImgNumber].color === 'green') {
            textContentGreenOne--
        } else if (finalDeck[deckImgNumber].color === 'brown') {
            textContentBrownOne--
        } else if (finalDeck[deckImgNumber].color === 'blue') {
            textContentBlueOne--
        }
    } else if (deckImgNumber < (n2GreenAcc + n2BlueAcc + n2BrownAcc)) {
        if (finalDeck[deckImgNumber].color === 'green') {
            textContentGreenTwo--
        } else if (finalDeck[deckImgNumber].color === 'brown') {
            textContentBrownTwo--
        } else if (finalDeck[deckImgNumber].color === 'blue') {
            textContentBlueTwo--
        }
    } else if
        (deckImgNumber < (n3GreenAcc + n3BlueAcc + n3BrownAcc)) {
        if (finalDeck[deckImgNumber].color === 'green') {
            textContentGreenThree--
        } else if (finalDeck[deckImgNumber].color === 'brown') {
            textContentBrownThree--
        } else if (finalDeck[deckImgNumber].color === 'blue') {
            textContentBlueThree--
        }
    }
    setCardTracker();
    stageOneTextDone();
    stageTwoTextDone();
    stageThreeTextDone();
    lastCardShow();
};

deck.addEventListener('click', showNextCard);
deck.addEventListener('click', changeCardTracker);
