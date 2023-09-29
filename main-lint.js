//Below, there is a string called story. We want to gather some information about 
//  the individual words and sentences in the string. Let’s split the string into 
//  individual words and save them in a new array called storyWords.

let story = ('Last weekend, I took literally the most beautiful bike ride of my life.' + 
    'The route is called "The 9W to Nyack" and it actually stretches all the way' + 
    'from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an ' + 
    'adventure from beginning to end! It is a 48 mile loop and it basically took me ' +
    'an entire day. I stopped at Riverbank State Park to take some extremely artsy ' +
    'photos. It was a short stop, though, because I had a really long way left to go. ' +
    'After a quick photo op at the very popular Little Red Lighthouse, I began my trek ' +
    'across the George Washington Bridge into New Jersey.  The GW is actually very' +
    'long - 4,760 feet! I was already very tired by the time I got to the other side.'+  
    'An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park' + 
    'along the coast of the Hudson.  Something that was very surprising to me was that' + 
    'near the end of the route you actually cross back into New York! At this point,' + 
    'you are very close to the end.');

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//splits every part the string after a space and turns all of the elements into an array.
const storyWords = story.split(' ');
//Prints the length of the array.
console.log(storyWords.length);

//When console.log-ed this will print out the storyWords array without words in the unnecessaryWords array.
var betterWords = storyWords.filter(function (word) {
    if (!unnecessaryWords.includes(word)) {
        return word;
    }
});

// counts the number of times overusedWords are used.
let overusedCount = 0;

for (let i = 0; i < storyWords.length; i++) {
    const word = storyWords[i];

    for (let j = 0; j < overusedWords.length; j++) {
        const overusedWord = overusedWords[j];
        
        if (word === overusedWord) {
            overusedCount += 1;
        }
    }
}

//counts the number of scentences in the story. 
let sentences = 0;

for (let i = 0; i < storyWords.length; i++) {
    const word = storyWords[i];
    
    if (word[word.length - 1] === '!' || word[word.length - 1] === '.') {
        sentences += 1; 
    }
}

console.log(`You used ${overusedCount} overused words.`);

console.log(betterWords);

console.log(sentences);

//joins betterWords into a string w/ spaces.
console.log(betterWords.join(' '))
