function contarOvejas(ovejas) {
  return ovejas.filter(oveja => {
    const name = oveja.name.toLowerCase();
    const color = oveja.color.toLowerCase();
    if (color === 'rojo' && name.includes('a') && name.includes('n')) return oveja;
  });
}