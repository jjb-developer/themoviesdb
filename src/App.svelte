<script>

   import Menulateral from './lib/menuLateral.svelte'
   import { fly } from 'svelte/transition'
   import json from './filmaccion.json'

   const logo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'

   const apiImage = "https://image.tmdb.org/t/p/w200/"
   const apiImageBackdrop = "https://image.tmdb.org/t/p/w200/"

   let modal = false
   let pag = 1
   let data = json.data
   let preview = data.action[Math.ceil((Math.random(0,2)/4)*100)]

   //setInterval(()=> preview = data[Math.ceil((Math.random(0,2)/4)*100)] ,60000)

   let divFilm28;
   let divFilm12;
   let divFilm35;
   let divFilm10749;
   let divFilm99;
   let divFilm10402;
   let x = 0
   let y = 0

   function btnPreview(box){
      //divFilm.scrollLeft += divFilm.clientWidth
      box.scrollLeft += 216
   }

   function btnNext(box){
      //divFilm.scrollLeft -= divFilm.clientWidth
      box.scrollLeft -= 216
   }

</script>

<div style="background-image: url({apiImageBackdrop+preview.backdrop_path});" class='relative bg-fixed bg-cover main'>
   <Menulateral/>
   <div class='flex flex-col items-center justify-center mx-auto pb-10 bg-[#032541] bg-opacity-[75%]'>
      <div class='flex w-full h-96'>
         <div class='pl-20 sm:pl-28 '>
            <div class='flex flex-col gap-y-5 justify-center px-10 h-96'>
               <h1 class='text-4xl sm:text-5xl text-[#F75C03] font-bold tracking-tight'>{ preview.title || 'The Movies'}</h1>
               <p class='line-clamp-7 sm:line-clamp-6 text-zinc-50 text-[0.85rem] sm:text-[0.95rem] w-64 sm:w-80'>{ preview.overview || 'Las mejores peliculas para compartir un fin de semana las encuentras aquí, en The Movies, gracias a la API de www.themoviedb.org'}</p>
               <div class='text-zinc-400 text-[0.85rem] sm:text-[0.95rem]'>
                  <span>Valoracion: </span>
                  <span class='text-[#F75C03] font-bold'>{ preview.vote_average || 0.0}</span>
               </div>
               <div>
                  <div class='cursor-pointer rounded w-20 h-9 text-[#F75C03] bg-zinc-50 hover:bg-zinc-200 flex items-center justify-center pr-2'>
                     <i class='text-2xl bx bx-play'></i>
                     <span class='font-bold text-sm'>PLAY</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- start componente slider accion -->
      <div class='pl-16 w-full max-h-[400px] bg-[#01B4E4] bg-opacity-10 flex flex-col'>
         <div class='pl-32 flex items-center gap-x-1 pt-5'>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='animate-bounce w-3 h-3 rounded-full bg-[#F75C03]'></div>
            <h2 class='pl-2 text-xl text-zinc-50 font-bold capitalize'>Todas las Películas Accion</h2>
         </div>
         <div class='relative flex justify-center items-center'>
            <!-- boton left -->
            <div on:click={ ()=>btnNext(divFilm28) } class='z-40 relative left-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-left-arrow'></i></div>
            <div bind:this={divFilm28} class='btnL scroll max-h-[420px] w-[75%] overflow-x-auto flex gap-x-4 py-5'>
               {#each data.action as film}
                  <!-- grayscale hover:grayscale-0 -->
                  <div on:click={ ()=>{ preview = film } } class='cursor-pointer min-w-[200px] hover:scale-105 transition-[transform,filter] duration-500'>
                     <figure class='rounded overflow-hidden bg-slate-900'>
                        <img src={apiImage+film.poster_path} alt='imagen'>
                     </figure>
                  </div>
               {/each}
            </div>
            <div on:click={ ()=>btnPreview(divFilm28) } class='relative right-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-right-arrow'></i></div>
         </div>
      </div>
      <!-- end componente slider accion -->

      <!-- start componente slider aventura -->
      <div class='pl-16 w-full max-h-[400px] bg-[#01B4E4] bg-opacity-10 flex flex-col'>
         <div class='pl-32 flex items-center gap-x-1 pt-5'>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='animate-bounce w-3 h-3 rounded-full bg-[#F75C03]'></div>
            <h2 class='pl-2 text-xl text-zinc-50 font-bold capitalize'>Todas las Películas Aventura</h2>
         </div>
         <div class='relative flex justify-center items-center'>
            <!-- boton left -->
            <div on:click={ ()=> btnNext(divFilm12) } class='z-40 relative left-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-left-arrow'></i></div>
            <div bind:this={divFilm12} class='btnL scroll max-h-[420px] w-[75%] overflow-x-auto flex gap-x-4 py-5'>
               {#each data.adventure as film}
                  <!-- grayscale hover:grayscale-0 -->
                  <div on:click={ ()=>{ preview = film } } class='cursor-pointer min-w-[200px] hover:scale-105 transition-[transform,filter] duration-500'>
                     <figure class='rounded overflow-hidden bg-slate-900'>
                        <img src={apiImage+film.poster_path} alt='imagen'>
                     </figure>
                  </div>
               {/each}
            </div>
            <div on:click={ ()=> btnPreview(divFilm12) } class='relative right-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-right-arrow'></i></div>
         </div>
      </div>

      <!-- end componente slider aventura -->

      <!-- start componente slider romance -->
      <div class='pl-16 w-full max-h-[400px] bg-[#01B4E4] bg-opacity-10 flex flex-col'>
         <div class='pl-32 flex items-center gap-x-1 pt-5'>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='animate-bounce w-3 h-3 rounded-full bg-[#F75C03]'></div>
            <h2 class='pl-2 text-xl text-zinc-50 font-bold capitalize'>Todas las Películas Romance</h2>
         </div>
         <div class='relative flex justify-center items-center'>
            <!-- boton left -->
            <div on:click={ ()=>btnNext(divFilm28) } class='z-40 relative left-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-left-arrow'></i></div>
            <div bind:this={divFilm28} class='btnL scroll max-h-[420px] w-[75%] overflow-x-auto flex gap-x-4 py-5'>
               {#each data.romance as film}
                  <!-- grayscale hover:grayscale-0 -->
                  <div on:click={ ()=>{ preview = film } } class='cursor-pointer min-w-[200px] hover:scale-105 transition-[transform,filter] duration-500'>
                     <figure class='rounded overflow-hidden bg-slate-900'>
                        <img src={apiImage+film.poster_path} alt='imagen'>
                     </figure>
                  </div>
               {/each}
            </div>
            <div on:click={ ()=>btnPreview(divFilm28) } class='relative right-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-right-arrow'></i></div>
         </div>
      </div>
      <!-- end componente slider romance -->

      <!-- start componente slider comedy -->
      <div class='pl-16 w-full max-h-[400px] bg-[#01B4E4] bg-opacity-10 flex flex-col'>
         <div class='pl-32 flex items-center gap-x-1 pt-5'>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='animate-bounce w-3 h-3 rounded-full bg-[#F75C03]'></div>
            <h2 class='pl-2 text-xl text-zinc-50 font-bold capitalize'>Todas las Películas Comedia</h2>
         </div>
         <div class='relative flex justify-center items-center'>
            <!-- boton left -->
            <div on:click={ ()=>btnNext(divFilm28) } class='z-40 relative left-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-left-arrow'></i></div>
            <div bind:this={divFilm28} class='btnL scroll max-h-[420px] w-[75%] overflow-x-auto flex gap-x-4 py-5'>
               {#each data.comedy as film}
                  <!-- grayscale hover:grayscale-0 -->
                  <div on:click={ ()=>{ preview = film } } class='cursor-pointer min-w-[200px] hover:scale-105 transition-[transform,filter] duration-500'>
                     <figure class='rounded overflow-hidden bg-slate-900'>
                        <img src={apiImage+film.poster_path} alt='imagen'>
                     </figure>
                  </div>
               {/each}
            </div>
            <div on:click={ ()=>btnPreview(divFilm28) } class='relative right-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-right-arrow'></i></div>
         </div>
      </div>
      <!-- end componente slider comedy -->

      <!-- start componente slider documentary -->
      <div class='pl-16 w-full max-h-[400px] bg-[#01B4E4] bg-opacity-10 flex flex-col'>
         <div class='pl-32 flex items-center gap-x-1 pt-5'>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='animate-bounce w-3 h-3 rounded-full bg-[#F75C03]'></div>
            <h2 class='pl-2 text-xl text-zinc-50 font-bold capitalize'>Todas los Documentales</h2>
         </div>
         <div class='relative flex justify-center items-center'>
            <!-- boton left -->
            <div on:click={ ()=>btnNext(divFilm28) } class='z-40 relative left-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-left-arrow'></i></div>
            <div bind:this={divFilm28} class='btnL scroll max-h-[420px] w-[75%] overflow-x-auto flex gap-x-4 py-5'>
               {#each data.documentary as film}
                  <!-- grayscale hover:grayscale-0 -->
                  <div on:click={ ()=>{ preview = film } } class='cursor-pointer min-w-[200px] hover:scale-105 transition-[transform,filter] duration-500'>
                     <figure class='rounded overflow-hidden bg-slate-900'>
                        <img src={apiImage+film.poster_path} alt='imagen'>
                     </figure>
                  </div>
               {/each}
            </div>
            <div on:click={ ()=>btnPreview(divFilm28) } class='relative right-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-right-arrow'></i></div>
         </div>
      </div>
      <!-- end componente slider documentary -->

      <!-- start componente slider music -->
      <div class='pl-16 w-full max-h-[400px] bg-[#01B4E4] bg-opacity-10 flex flex-col'>
         <div class='pl-32 flex items-center gap-x-1 pt-5'>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='w-2 h-2 rounded-full bg-[#F75C03]'></div>
            <div class='animate-bounce w-3 h-3 rounded-full bg-[#F75C03]'></div>
            <h2 class='pl-2 text-xl text-zinc-50 font-bold capitalize'>Todas los Musicales</h2>
         </div>
         <div class='relative flex justify-center items-center'>
            <!-- boton left -->
            <div on:click={ ()=>btnNext(divFilm10402) } class='z-40 relative left-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-left-arrow'></i></div>
            <div bind:this={divFilm28} class='btnL scroll max-h-[420px] w-[75%] overflow-x-auto flex gap-x-4 py-5'>
               {#each data.music as film}
                  <!-- grayscale hover:grayscale-0 -->
                  <div on:click={ ()=>{ preview = film } } class='cursor-pointer min-w-[200px] hover:scale-105 transition-[transform,filter] duration-500'>
                     <figure class='rounded overflow-hidden bg-slate-900'>
                        <img src={apiImage+film.poster_path} alt='imagen'>
                     </figure>
                  </div>
               {/each}
            </div>
            <div on:click={ ()=>btnPreview(divFilm10402) } class='relative right-5 cursor-pointer w-12 h-12 bg-[#F75C03] rounded-full flex items-center justify-center'><i class='text-md text-zinc-50 bx bxs-right-arrow'></i></div>
         </div>
      </div>
      <!-- end componente slider music -->

      <div class='z-[1000] pl-[65px] w-full flex justify-center items-center gap-5 py-10 font-bold text-slate-500'>
         <button on:click={ ()=> {pag--;conexionAPI()} } class="cursor-pointer rounded bg-slate-300 w-28 h-10 flex items-center justify-center  transition-[background,color] duration-500 {pag === 1 ? '':'hover:text-slate-50'} {pag === 1 ? 'hover:text-slate-500':'hover:bg-[#F75C03]'}" disabled={pag === 1}>PREVIUS</button>
         <div class='text-2xl'>{ pag }</div>
         <button on:click={ ()=> {pag++;conexionAPI()} } class='cursor-pointer rounded bg-slate-300 w-28 h-10 flex items-center justify-center hover:text-slate-50 hover:bg-[#F75C03] transition-[background,color] duration-500' disabled={false}>NEXT</button>
      </div>
   </div>
   <div class='pl-20 w-full bg-[#0F1B33] flex flex-col items-center justify-center py-20'>
      <p class='font-bold text-lg text-zinc-50'>Esta prueba es patrocinada por la API de TheMovieDB!</p>
      <img class='w-40 h-40' src="{logo}" alt='logo patrocinador'>
   </div>
</div>

<style>
.scroll {
   scroll-behavior: smooth;
}
.scroll::-webkit-scrollbar {
   display: none;
}
</style>