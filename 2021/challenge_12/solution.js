function getMinJump(obstacles) {
  for (let jump = 2; true; jump++) {
    if (obstacles.every(obstacle => obstacle % jump !== 0)) {
      return jump;
    }
  }
}