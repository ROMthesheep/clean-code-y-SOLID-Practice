// Esto no sigue el principio de segregacion de interfaces

interface Bird {
  fly(): void
  eat(): void
  run(): void
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
}

class Hummingbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Ostrich implements Bird {
  public fly() { throw new Error("Las avestruces no vuelan") }
  public eat() {}
  public run() {}
}

class Penguin implements Bird {
  public fly() { throw new Error("Los pinguinos no vuelan") }
  public eat() {}
  public run() {}
  public swim() {} // esto tendria que ir a la interfaz
} 

// Esto si sigue el principio de segregacion

interface Pajaro {
  eat(): void
}

interface Volador {
  fly(): void
}

interface Nadador {
  swim(): void
}

interface Corredor {
  run(): void
}


class Loro implements Pajaro, Volador {
  public fly() {}
  public eat() {}
}

class colibri implements Pajaro, Volador {
  public fly() {}
  public eat() {}
}

class Avestruz implements Pajaro, Corredor {
  public eat() {}
  public run() {}
}

class Pinguino implements Pajaro, Nadador {
  public eat() {}
  public swim() {}
}

