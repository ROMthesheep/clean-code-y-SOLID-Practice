(() => {

  // arreglo de temperaturas celsius
  const temps = [33.6, 12.34];

  // Dirección ip del servidor
  const serverIp = '123.123.123.123';

  // Listado de usuarios
  const users = [
    { id: 1, email: 'fernando@google.com'},
    { id: 2, email: 'juan@google.com' }, 
    { id: 3, email: 'melissa@google.com' }
  ];

  // Listado de emails de los usuarios
  const emails = users.map( user => user.email );

  // Variables booleanas de un video juego
  const isJumping = false;
  const isRunning = true;
  const hasItems = true;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - startTime;


  // Funciones
  function getBook() {
      throw new Error('Function not implemented.');
  }

  function getBooksUrl( url: string) {
      throw new Error('Function not implemented.');
  }
  
  function calculateSquareArea( squareSideLenght: number ) {
      throw new Error('Function not implemented.');
  }

  function printJob() {
      throw new Error('Function not implemented.');
  }
})();





