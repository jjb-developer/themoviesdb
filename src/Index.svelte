<script>
   import MenuPrincipal from './lib/menu.svelte'
   import Slider from './lib/slider.svelte'
   import Header from './lib/header.svelte'

   import json from './datafilm.json'
   let index = 4
   let title = "Hello World"
   let movies = json.data
   const backdropMovie = "https://image.tmdb.org/t/p/w200/"
   let preview = movies.action[index]
   
   /*let film;
   async function conexionAPI(){
      const dataAPI = await fetch('')
      const result = await dataAPI.json()
      film = JSON.stringify(result.results)
   }*/

</script>
<div class='relative w-full bg-[#032541] overflow-hidden'>
   <MenuPrincipal/>
   <Header movie={preview}/>
   <Slider title={"acción"} movies={movies.action}/>
   <Slider title={"aventura"} movies={movies.adventure}/>
   <Slider title={"romance"} movies={movies.romance}/>
   <Slider title={"ficción"} movies={movies.science}/>
   <Slider title={"historía"} movies={movies.history}/>
   <Slider title={"documentales"} movies={movies.documentary}/>
   <div class='w-full h-40 flex items-center justify-center border-t border-[#F75C03]'>
      <img class='h-10' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='logo'>
   </div>
   <div class='w-full h-12'></div>
</div>