//  https://pokeapi.co/api/v2/pokemon/
$(function() {
  function Instrucciones(){
    alert("¡Bienvenido Entrenador a la Pokédex! Un dispositivo creado para recopilar todos los pokemon existentes(por el momento solo hasta SEPTIMA GENERACION). Ve apretando 'Aceptar' para ir recibiendo las instrucciones.");
    alert("En la barra blanca (barra de busqueda) puedes escribir el nombre del pokemon que buscas (SIN MAYÚSCULAS) y apretando en 'Buscar', aparecerá el 'nombre del pokemon', su 'imagen' y sus tipos , junto con 3 botones.");
    alert("Con el boton 'Atrás' puedes retroceder en la lista al pokemon antecesor del que estás visualizando y con el boton 'Siguiente' el pokemon sucesor del que estás visualizando.");
    alert("Cuando quieras volver a buscar otro pokemon en especifico con la barra de busqueda, apreta el boton 'Reset'(Reiniciará la pagina) para que aparezca el boton 'Buscar' junto con la barra de busqueda.");
    alert("En la esquina superior derecha está el reproductor de música, donde puedes pausar o reproducir la musica que viene en la pagina, bajar o subir volumen de esta sin afectar tu volumen general o simplemente silenciarla.");
    alert("Espero te guste, ¡disfruta!");
  }

  function mostrar(){
     document.getElementById('Siguiente').style.display = 'inline';
     document.getElementById('Atrás').style.display = 'inline';
     document.getElementById('Reset').style.display = 'inline';
  }
  function ocultar(){
   document.getElementById('Buscar').style.display = 'none';
   document.getElementById('search').style.display = 'none';
   document.getElementById('Instrucciones').style.display = 'none';
  }
  function img_tipo1(pokemonType1){
    cad1= "/images/tipos/"
    cad2= `${pokemonType1}`
    cad3= ".png"
    cad4=cad1.concat(cad2, cad3)
    document.getElementById('tipo-1').src=cad4;

  }
  function img_tipo2(pokemonType2){
    cad1= "/images/tipos/"
    cad2= `${pokemonType2}`
    cad3= ".png"
    cad4=cad1.concat(cad2, cad3)
    document.getElementById('tipo-2').src=cad4;
  }
  function getPokemon(currentPokemonId) {
       $.getJSON(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`, function(data){
             var pokemonName = data.species.name
                 pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1,)
             var pokemon = data.sprites.front_default
             var currentPokemonId = data.id
             var pokemonType1 = data.types[0].type.name
             if  (Object.keys(data.types).length === 1){
                 $('#pokemon-image').attr('src', pokemon);
                 $('#pokemon-name').text(`${pokemonName}`);
                 $('#pokemon-id').text(`${currentPokemonId}`);
                 document.getElementById('tipo-2').src="";
                 img_tipo1(pokemonType1)
             }
             else if (Object.keys(data.types).length === 2){
                 var pokemonType2 = data.types[1].type.name
                 $('#pokemon-image').attr('src', pokemon);
                 $('#pokemon-name').text(`${pokemonName}`);
                 $('#pokemon-id').text(`${currentPokemonId}`);
                 img_tipo1(pokemonType1)
                 img_tipo2(pokemonType2)
             }

     });

  }

  $('#Buscar').click(function(){
     ocultar()
     mostrar()
     var currentPokemon = $('input:text[name="pokemon_name"]').val();
     $.getJSON(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`, function(data){
          var currentPokemonId = data.id
          getPokemon(currentPokemonId)

     $('#Siguiente').click(function(){
              currentPokemonId = currentPokemonId + 1
              getPokemon(currentPokemonId)
     });
     $('#Atrás').click(function(){
              currentPokemonId = currentPokemonId - 1
              getPokemon(currentPokemonId)
     });

     });
  });
  $('#Reset').click(function(){
    location.reload(true)
  });
  $('#Instrucciones').click(function(){
    Instrucciones()
  });

});
