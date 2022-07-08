const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  let newTutorials = tutorials.map(function (element, index) {
    let newElement = []
    for(index = 0; index<element.length; index++){
      if(index === 0 || element[index - 1] === ' ') {
        newElement.push(element[index].toUpperCase())
      } else{
        newElement.push(element[index])
      }
  }
    return newElement.join('')
  })
  return newTutorials
}
