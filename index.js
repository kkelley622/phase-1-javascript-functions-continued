// code your solution here

//defines saturdayFun function declaration as specified

function saturdayFun(event = 'roller-skate') {
    return `This Saturday, I want to ${event}!`
}

saturdayFun('bathe my dog');

// defines mondayWork function expression as specified



const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

mondayWork('work from home');

// defines wrapAdjective function according to the specification

function wrapAdjective(highlight = '*') {

    return function (adjective = 'a hard worker') {
       return `You are ${highlight}${adjective}${highlight}!`;
    }
}

wrapAdjective('||')('a dedicated programmer');
