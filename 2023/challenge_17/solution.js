function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let currentInterval = intervals[0];
  const result = intervals.slice(1).reduce((acc, nextInterval) => {
    if (currentInterval[1] >= nextInterval[0]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      acc.push(currentInterval);
      currentInterval = nextInterval;
    }

    return acc
  }, [])

  result.push(currentInterval)
  return result
}