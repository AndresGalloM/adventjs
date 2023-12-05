function cyberReindeer(road, time) {
  const result = []
  let c = '.'

  for (let t = 1; t <= time; t++) {
    result.push(road)
    const reindeer = road.indexOf('S')

    if (t === 5) road = road.replaceAll('|', '*')
    if (road[reindeer + 1] === '|') continue
    
    const r = [...road]
    r[reindeer] = c
    c = r[reindeer + 1]
    r[reindeer + 1] = 'S'
    road = r.join('')
  }

  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)