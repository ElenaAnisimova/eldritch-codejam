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

const removeClassAnicents = () => {
    for (let item of allAncientCards) {
        item.classList.remove('active-ancient')
    }
};

const chooseAncient = (e) => {
    e.target.classList.add('active-ancient')
};

const showDifficulties = () => {
    difficultyButtonsContainer.classList.remove('not-active');
}

ancientsCardsContainer.addEventListener('click', removeClassAnicents,);
ancientsCardsContainer.addEventListener('click', chooseAncient);
ancientsCardsContainer.addEventListener('click', showDifficulties);


const removeClassDifficulty = () => {
    for (let item of allDifficultiesButtons) {
        item.classList.remove('difficulty-active')
    }
};

const chooseDifficulty = (e) => {
    e.target.classList.add('difficulty-active')
};

difficultyButtonsContainer.addEventListener('click', removeClassDifficulty,);
difficultyButtonsContainer.addEventListener('click', chooseDifficulty);
difficultyButtonsContainer.addEventListener('click', () => { shuffleButton.classList.remove('not-active-display-none') });
difficultyButtonsContainer.addEventListener('click', () => { rightPart.classList.add('not-active-display-none') });
shuffleButton.addEventListener('click', () => { rightPart.classList.remove('not-active-display-none') });
shuffleButton.addEventListener('click', () => { shuffleButton.classList.add('not-active-display-none') });

const n1Green = ancientsData[0].firstStage.greenCards;
const n1Brown = ancientsData[0].firstStage.brownCards;
const n1Blue = ancientsData[0].firstStage.blueCards;
const n2Green = n1Green + ancientsData[0].secondStage.greenCards;
const n2Brown = n1Brown + ancientsData[0].secondStage.brownCards;
const n2Blue = n1Blue + ancientsData[0].secondStage.blueCards;
const n3Green = n2Green + ancientsData[0].thirdStage.greenCards;
const n3Brown = n2Brown + ancientsData[0].thirdStage.brownCards;
const n3Blue = n2Blue + ancientsData[0].thirdStage.blueCards;

const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random());
};

const greenArrayShuffled = shuffleArray(cardsDataGreen);
const brownArrayShuffled = shuffleArray(cardsDataBrown);
const blueArrayShuffled = shuffleArray(cardsDataBlue);


const finalDeckGreenOne = greenArrayShuffled.slice(0, n1Green);
const finalDeckBrownOne = brownArrayShuffled.slice(0, n1Brown);
const finalDeckBlueOne = blueArrayShuffled.slice(0, n1Blue);
const finalDeckOne = [...finalDeckGreenOne, ...finalDeckBrownOne, ...finalDeckBlueOne];
const finalDeckOneShuffled = shuffleArray(finalDeckOne);
const finalDeckGreenTwo = greenArrayShuffled.slice(n1Green, n2Green);
const finalDeckBrownTwo = brownArrayShuffled.slice(n1Brown, n2Brown);
const finalDeckBlueTwo = blueArrayShuffled.slice(n1Blue, n2Blue);
const finalDeckTwo = [...finalDeckGreenTwo, ...finalDeckBrownTwo, ...finalDeckBlueTwo];
const finalDeckTwoShuffled = shuffleArray(finalDeckTwo);
const finalDeckGreenThree = greenArrayShuffled.slice(n2Green, n3Green);
const finalDeckBrownThree = brownArrayShuffled.slice(n2Brown, n3Brown);
const finalDeckBlueThree = blueArrayShuffled.slice(n2Blue, n3Blue);
const finalDeckThree = [...finalDeckGreenThree, ...finalDeckBrownThree, ...finalDeckBlueThree];
const finalDeckThreeShuffled = shuffleArray(finalDeckThree);
const finalDeck = [...finalDeckOneShuffled, ...finalDeckTwoShuffled, ...finalDeckThreeShuffled];


let deckImgNumber = -1;
const setCardBg = () => {
    lastCard.style.backgroundSize = 'cover';
    lastCard.style.backgroundImage = `url(${(finalDeck[deckImgNumber].cardFace)})`;
}

const showNextCard = () => {
    if (deckImgNumber < finalDeck.length - 1) {
        deckImgNumber++
    } else {
        lastCard.style.backgroundImage = `url(${(finalDeck[deckImgNumber].cardFace)})`;
    }
    setCardBg();
};

let textContentGreenOne = n1Green;
let textContentBrownOne = n1Brown;
let textContentBlueOne = n1Blue;
let textContentGreenTwo = n2Green - n1Green;
let textContentBrownTwo = n2Brown - n1Brown;
let textContentBlueTwo = n2Blue - n1Blue;
let textContentGreenThree = n3Green - n2Green;
let textContentBrownThree = n3Brown - n2Brown;
let textContentBlueThree = n3Blue - n2Blue;

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

setCardTracker();

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

const lastCardShow = () => {
    if (deckImgNumber === (finalDeck.length - 1)) {
        deck.classList.add('not-active')
    }
}

const changeCardTracker = () => {

    if (deckImgNumber < finalDeckOneShuffled.length) {
        if (finalDeck[deckImgNumber].color === 'green') {
            textContentGreenOne--
        } else if (finalDeck[deckImgNumber].color === 'brown') {
            textContentBrownOne--
        } else if (finalDeck[deckImgNumber].color === 'blue') {
            textContentBlueOne--
        }
    } else if (deckImgNumber < (finalDeckOneShuffled.length + finalDeckTwoShuffled.length)) {
        if (finalDeck[deckImgNumber].color === 'green') {
            textContentGreenTwo--
        } else if (finalDeck[deckImgNumber].color === 'brown') {
            textContentBrownTwo--
        } else if (finalDeck[deckImgNumber].color === 'blue') {
            textContentBlueTwo--
        }
    } else if
        (deckImgNumber < (finalDeckOneShuffled.length + finalDeckTwoShuffled.length + finalDeckThreeShuffled.length)) {
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
console.log(finalDeck);