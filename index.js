function saturdayFun(activity1 = 'roller-skate') {
    return `This Saturday, I want to ${activity1}!`
}

function mondayWork(activity2 = 'go to the office'){
  return `This Monday, I will ${activity2}.`
}

function wrapAdjective(thing) {
  return (second) => `You are ${thing}${second}${thing}!`
}

//console.log(wrapAdjective('&&')('howaboutanother'))


























// function saturdayFun(activity="roller-skate") {
//   return `This Saturday, I want to ${activity}!`
// }

// let mondayWork = function(activity="go to the office") {
//   return `This Monday, I will ${activity}.`
// }

// let wrapAdjective = function(style="*") {
//   return function(adjective="special") {
//     return `You are ${style}${adjective}${style}!`
//   }
// }
