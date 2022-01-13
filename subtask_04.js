const counter = () => {
  let count = 0

  return () => count++ 
}

const test = counter()
console.log(test())
console.log(test())
