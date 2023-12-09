function countTime(leds) {
  let count = 0
  while (true) {
    if (new Set(leds).size === 1) return count
    leds = leds.map((led, i) => leds.at(i - 1) ? 1 : led);
    count += 7
  }
}