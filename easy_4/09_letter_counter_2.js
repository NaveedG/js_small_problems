/* Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. 
For instance, the word size of "it's" is 3, not 4. */

wordSizes = str => {
  let obj = {}
  if (str.length > 0) {
    const arr = str.split(' ')
    arr.forEach(word => {
      let newWord = word.replace(/[^a-z]/gmi, '')
      if (obj[newWord.length])
        obj[newWord.length] += 1
      else
        obj[newWord.length] = 1
    })
  }
  return obj
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}