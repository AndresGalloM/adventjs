function pangram(letter) {
  const dieresis_accent = {
    'á': 'a',
    'ä': 'a',
    'é': 'e',
    'ë': 'e',
    'ï': 'i',
    'í': 'i',
    'ó': 'o',
    'ö': 'o',
    'ú': 'u',
    'ü': 'u',
    'ü': 'u'
  }

  for (const key of Object.keys(dieresis_accent)) {
    letter = letter.toLowerCase().replaceAll(key, dieresis_accent[key])
  }

  return new Set(letter.replaceAll(/[^a-zñ]/g, '')).size === 27
}