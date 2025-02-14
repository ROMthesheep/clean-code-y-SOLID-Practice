(() => {


  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit( fruit: string ): boolean {
       return (['manzana', 'cereza' , 'ciruela'].includes(fruit))
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor( color: string ): string[] {

    switch (color) {
        case 'red':
            return ['manzana','fresa'];
        case 'yellow':
            return ['manzana','fresa'];
        case 'purple':
            return ['manzana','fresa'];
        default:
            throw Error('the color must be: red, yellow, purple');
    }
  }
  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    switch (false) { // We define a negative logic
        case isFirstStepWorking: return "First step broken."
        case isSecondStepWorking: return "Second step broken."
        case isThirdStepWorking: return "Third step broken."
        case isFourthStepWorking: return "Fourth step broken."
        default: return "Working properly!"
    }
  }


  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();