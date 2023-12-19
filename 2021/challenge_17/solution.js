function countPackages(carriers, carrierID) {
  carriers = carriers.reduce((acc, carrier) => {
  acc[carrier[0]] = [carrier[1], carrier[2]]
  return acc
  }, {})

  const packages = (name) => {
    let sum = 0
    for (const subCarrier of carriers[name][1]) {
      sum += packages(subCarrier)
    }

    return sum += carriers[name][0]
  }
  
  return packages(carrierID)
}