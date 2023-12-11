function selectSleigh(distance, sleighs) {
  sleighs.sort((a, b) => b.consumption - a.consumption)
  const sleigh = sleighs.find(sleigh => sleigh.consumption * distance <= 20)
  return sleigh ? sleigh.name : null
}