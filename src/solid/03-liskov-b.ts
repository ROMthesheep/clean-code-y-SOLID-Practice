export abstract class Car {
  // getNumberOfSeats(): number { throw new Error("method not implemented") }

  abstract getNumberOfSeats(): number
}

export class Tesla extends Car {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Audi extends Car {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Toyota extends Car {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Honda extends Car {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Volvo extends Car {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}