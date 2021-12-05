const treeHeight = 19
const newLine = '\n'
const treePart = '_*'

let treeRow = '*'
let treeToView = treeRow + newLine

for (let i = 1; i < treeHeight; i++) {
  treeRow += treePart
  treeToView += treeRow + newLine
}

console.log(treeToView)