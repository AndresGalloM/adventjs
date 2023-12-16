function calculateTime(deliveries) {
  const MAXTIME = 7 * 60 * 60
  const time = deliveries.reduce((acc, delivery) => {
    const [hours, minutes, seconds] = delivery.split(':');
    return acc += (+hours * 60 + +minutes ) * 60 + +seconds
  }, 0)
  
  const baseTime = time - MAXTIME
  const hours = Math.abs(Math.trunc(baseTime / 3600)).toString().padStart(2, '0')
  const minutes = Math.abs(Math.trunc((baseTime % 3600) / 60)).toString().padStart(2, '0')
  const seconds = Math.abs(baseTime % 60).toString().padStart(2, '0')

  return `${baseTime < 0 ? '-' : ''}${hours}:${minutes}:${seconds}`
}