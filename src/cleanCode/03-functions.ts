(() => {

  // función para obtener información de una película por Id
  function getMovieById( id: string ) {
      console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieActorsById( id: string ) {
      console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById( id: string ) {
      console.log({ ActorId: id });
  }
  
  // Crear una película
  interface MovieModel {
    cast: string[]
    description: string
    rating: number
    title: string
  }

  function addMovie({title, description, rating, cast } : MovieModel ) {
      console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if ( fullName === 'fernando' ) return false;

      console.log('Crear actor');
      return true;        

  }
})();





