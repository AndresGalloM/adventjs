function getCompleted(part, total) {
  const [hoursPart, minutesPart, secondsPart] = part.split(':');
  const [hoursTotal, minutesTotal, secondsTotal] = total.split(':');

  const partSeconds = (+hoursPart * 60 + +minutesPart) * 60 + +secondsPart;
  const totalSeconds = (+hoursTotal * 60 + +minutesTotal) * 60 + +secondsTotal;

  let [a, b] = [partSeconds, totalSeconds]
  let aux = 1
  while (aux) {
    [b, a] = [a, aux = (b % a)]
  }

  const gcd = b
  return `${partSeconds / gcd}/${totalSeconds / gcd}`
}