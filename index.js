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
  let arrayOfArrays = tutorials.map(title=> title.split(' '))
  let newTutorials = arrayOfArrays.map(array=> titleCase(array) )
  return newTutorials
}

const titleCase = arrrayOfArrays =>{
  let titleCasedString = arrrayOfArrays.map(string=> string.charAt(0).toUpperCase()+string.slice(1)).join(' ')
  return titleCasedString
}


titleCased(tutorials)