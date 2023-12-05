function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => {
    a = Object.values(a).reduce((acc, num) => acc += num, 0)
    b = Object.values(b).reduce((acc, num) => acc += num, 0)
    return a - b
  }).every((box, i) => {
    const nextBox = boxes[i + 1]

    return nextBox 
      ? box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h 
      : true
  })
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes))