function executeCommands(commands) {
  const MAX = 256
  const cpu = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  }

  for (let i = 0; i < commands.length; i++) {
    const [command, args] = commands[i].split(' ')
    let [x, y] = args.split(',')

    switch (command) {
      case 'MOV':
        cpu[y] = cpu[x] ?? Number(x)
        break
      case 'ADD':
        cpu[x] = (cpu[x] + cpu[y]) % MAX
        break
      case 'DEC':
        cpu[x] = (cpu[x] - 1 + MAX) % MAX
        break
      case 'INC':
        cpu[x] = (cpu[x] + 1) % MAX
        break
      case 'JMP':
        if (cpu['V00'] !== 0) i = Number(x) - 1
        break
    }
  }

  return Object.values(cpu)
}