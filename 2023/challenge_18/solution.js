function drawClock(time) {
  const clock = [[], [], [], [], [], [], []]

  const full = ["*", "*", "*"]
  const open = ["*", " ", "*"]
  const start = ["*", " ", " "]
  const end = [" ", " ", "*"]
  const spaces = [" ", " ", " "]
  const middle = [" ", "*", " "]

  const numbers = {
    0: [full, open, open, open, open, open, full],
    1: [end, end, end, end, end, end, end],
    2: [full, end, end, full, start, start, full],
    3: [full, end, end, full, end, end, full],
    4: [open, open, open, full, end, end, end],
    5: [full, start, start, full, end, end, full],
    6: [full, start, start, full, open, open, full],
    7: [full, end, end, end, end, end, end],
    8: [full, open, open, full, open, open, full],
    9: [full, open, open, full, end, end, full],
  };

  const hour1 = numbers[time[0]]
  const hour2 = numbers[time[1]]
  const colon = [spaces, spaces, middle, spaces, middle, spaces, spaces]
  const minute1 = numbers[time[3]]
  const minute2 = numbers[time[4]]

  for (let i = 0; i < clock.length; i++) {
    clock[i] = clock[i].concat(
      hour1[i],
      ' ', 
      hour2[i], 
      colon[i], 
      minute1[i], 
      ' ', 
      minute2[i]
    )
  }

  return clock
}