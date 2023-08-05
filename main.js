// template literal arrays
const objects = ['duck', 'statue', 'cheese board', 'bow tie', 'haircut', 'fish bowl', 'small intestine', 'neatly polished shoe', 'pie', 'laptop', 'chickpea curry', 'frying pan', 'wooly jumper', 'chicken kiev', 'sofa', 'generously sized chest freezer', 'public toilet', 'belly button'];
const names = ['Bob the Builder', 'Prince Harry', 'Axel Rose', 'Allison Hammond', 'Madonna', 'Captain Jack Sparrow', 'Sir Chris Hoy', 'Tony The Tiger', 'Taylor Swift', 'Professor Snape', 'Jack Black', 'Walter White', 'Rexatu Eater of Worlds and Sucker of Souls', 'Carol Vorderman', 'Mary Portas'];


const randIndex = (arr) => {   // selects a random element from an array 
   return arr[Math.floor(Math.random() * arr.length)];
};

const shuffleArr = (arr) => {  // randomises an array with Fisher-Yates shuffle 
    for (let i =arr.length -1; i > 0; i--) {
      for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    return arr;
}

const natName = (name) => {  // takes full name and returns natural language version - covers most cases but can be expanded
    let splitName = name.split(' ');
    if ( splitName[0] === 'Prince' || splitName[0] === 'King' || splitName[0] === 'Sir' || splitName[0] === 'Professor' || splitName[0] === 'Lord') {
        return splitName[1];
    } else if (splitName[0] === 'Mr' || splitName[0] === 'Miss' || splitName[0] === 'Misses' || splitName[0] === 'Captain') {   
        return `${splitName[0]} ${splitName[1]}`
    } else {
        return splitName[0];
    }  
  }

// Assigning template literals 

shuffleArr(names);

let p1 = names[0];
let p2 = names[1];
let title = natName(p1);
let title2 = natName(p2);
let object = randIndex(objects);


// - reference arrays - not all objects are references in all scenatios - some will need screening out


const lDescriptor = ['Behind', 'Underneath', 'Inside of', 'Directly underneath', 'Beside', 'Deep in the depths of', 'In ', 'Next door to', 'Floating above'];
const lDestination = ['a tree', 'a shipping container', 'a branch of the now defunt shop Topman', 'a sinister forest', 'a mechanical fish', 'a cinema', 'the tormenting hell that is Crewe Station', 'your local Wetherspoons', `a nice garden`, `B&M Bargins`, `a farmer's market`, `Chester Zoo`];
const qStart = ['Are you sure', 'Do you think', 'What if I told you', `If there's one thing I know, it's that`, `I'm getting a feeling that`, 'My heart tells me', 'The red sun rises as the prophecy fortold, this means', 'Could it be possible', 'How likely is it that', 'Do you get the feeling', 'Can you smell that? That means only one thing:'];
const qMiddle = [`you're a fan of`, `we're going to watch the`, 'It is upon us...the', 'you like floral diaplays themed around ', 'we must, at all costs, avoid', 'we must investigate a', `you would dislike a`, `we will encounter a`];
const qEnd = [object];


const statement = [`That's a strange looking ${object} isn't it?`, `Look out for that giant ${object}!`, `You seem to have dropped your ${object}`, `There is no greater pleasure in life than a ${object}`, `I come in seach of advice: my ${object} is giving me difficulty`, `Oh no! The warrenty on my ${object} has just ran out`, `Look at my ${object}. Magnificent isn't it?`, `Don't look now, but there's a ${object} behind you...`, `Wow I can smell that ${object} from here`, `Dear God! I've never seen a ${object} in the wild before`, `I'm not sure about that ${object}` , `Did your mom choose that ${object}, it's definitely her style`, `That is a fine example of a ${object} you have there`, `I've had this ${object} as long as I can remeber`, `I'm sure my ${object} is getting bigger`];
const p2Affirm = [`Yes, for sure ${title}!`, `In all the years I've known you ${title}, you've never been wrong`, `I've never seen a finer ${object}!`, `Totally!`, `Ain't that the truth!`, `I love ${object}, what a day!`, `As much as I try to tear myself away, ${object} keeps pulling me back`];
const p2Disagree = [`That is so not true`, `Never, I'm not sure how how a sane person could even think that!`, 'No, perish the thought!', `You're so wrong it makes me sad`, ` ${object} is for babies!`, `I'd love to stay and chat about ${object}, but my tea is ready`, `Never have cared about ${object}, never will. Sorry.`];
const p2Confused = ['Huh?', 'I literally cannot hear you over the sound of traffic', '¡Lo siento, no hablo Ingles!', `Who told you about ${object}? Thats's private information between me and my doctor`, `I know you didn't ask, but I'm not ${p1}, just a celebrity impersonator`];
const p2Outraged = [`How dare you ask such a thing ${title}!`, `Your ${object}'s not so great yourself ${title}`, `Even the mention of ${object} makes me sick, I will take my leave`, `How dare you!`, `You suck`, `I don't like that ${object}, and I will have my vengence`];
const p2Response = [`Your knowledge of ${object}s astounds me`, `I never knew that was your area ${title}`, `You sure do know your way around a ${object} ${title}`, `${object}s are cool aren't they?`];
const p2ReplyP = [`I'm so pleased you like my ${object} ${title}.`, 'yay...', `Many years had been building up to that moment, and I can tell you it was worth the wait`, `I could talk about ${object}s all night long with you`, `Let's run away together and keep this ${object} all to ourselves`];
const p2ReplyD = [`I'll thank you for keeping your ${object} related thoughts to yourself`, `Nobody asked, nobody cares`, `${object}s are commonly misunderstood, you should educate yourself`, `Wow so much knowledge, I am definitely impressed...`];
const Conclusion = ['They both lived happily ever after', 'These ended up being an unfortuate choice of last words', `They went their separate ways`, `This encounter sparked a scandalous affair`, `The whole village found out`, `Indigestion all round`, `A chronic case of the hiccups`, `They took the ${object} home with them and guarded it jealously`, `They forgot all about ${object} and binge watched The Wire instead`]; 

const refArrays = [lDescriptor, lDestination, qStart, qMiddle, qEnd, statement, p2Affirm, p2Disagree, p2Confused, p2Outraged, p2Response, p2ReplyP, p2ReplyD, Conclusion];


const shuffleAll = () => {  // uses shuffleArr to shuffle all reference arrays 
    refArrays.forEach(array => shuffleArr(array));
}

const randNum = (num) => {  // returns random number between 1 & 'num' (inclusivle)
    return Math.floor(Math.random()*num + 1);
};

// ---------- shuffle each array and assign variables needed for any template literals

shuffleAll()

const p1Question = `${qStart[0]} ${qMiddle[0]} ${qEnd[0]}?`;
let randNum1 = randNum(2);  // Determines whether p1 makes statment or asks question

let randNum3 = randNum(4);  // if p1 asks question, determines p2's reply 
let randNum4 = randNum(2);  // if P1 has made a statment, dertmines pleased or displeased reply

const p1Dialouge = () => {
    let p1Opening = 'BLANK';
    if (randNum1 === 1) { // case: p1 asks a question 
        p1Opening = p1Question;
    } else {  // case: p1 makes a statement
        p1Opening = statement[0];
    }
    return p1Opening;
}; 

const p2Dialouge = () => {
    let p2Reply = 'BLANK';
    if (randNum1 === 1) {  // Case: p1 has asked a question
        if (randNum3 === 1) {
            p2Reply = p2Affirm[0];
        } else if (randNum3 === 2) {
            p2Reply = p2Disagree[0];
        } else if (randNum3 === 3) {
            p2Reply = p2Confused[0];
        } else if (randNum3 === 4) {
            p2Reply = p2Outraged[0];
        };
    } else {   // Case: p2 has made a statment 
        if (randNum1 !== 1) {  
            p2Reply = p2Response[0];
        } else {
            if (randNum4 === 1) {
                p2Reply = p2ReplyP[0];
            } else {
                p2Reply = p2ReplyD[0];
            }
        }
    }
    return p2Reply
};

const p1speech = p1Dialouge();
const p2Speech = p2Dialouge();

const randDialouge = () => {
    return `

    ${p1}

    Met: ${p2}

    ${lDescriptor[0]} ${lDestination[0]}

    ${title} said: ${p1speech} 

    ${title2} said: ${p2Speech}

    And the consequence was: ${Conclusion[0]}`;

}

console.log(randDialouge());




// Errors found
// 'objects' elements should not end with 's' 'pastries's' 
// if object isn't in first path, p2 may still refer to it as if it is - add object to more arrays or filter out 'object' arrays if not used by p1
// can object and object be merged?