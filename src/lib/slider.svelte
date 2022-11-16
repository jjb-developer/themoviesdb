<script>
   import { fly } from 'svelte/transition'
   export let movies;
   export let title;
   let modal = false;
   let info;
</script>

<div class='flex w-full flex-col gap-y-2 pb-5'>
   {#if modal }
   <div in:fly='{{ x:500, duration:500 }}' out:fly='{{ x:500, duration:500 }}' class='fixed z-[10002] inset-0 w-full h-screen bg-[#032541] bg-opacity-75 flex items-center justify-center text-zinc-50'>
      <div class='relative w-[90%] h-[90%] bg-zinc-900 rounded-md overflow-hidden'>
         <i on:click={ ()=> modal = false } class='cursor-pointer bg-zinc-600 rounded-full pl-1 w-7 h-7 absolute text-xl top-3 left-3 bx bx-arrow-back'></i>
         <div class='w-full h-[180px] overflow-hidden'>
            <div class='absolute cursor-pointer left-[50%] top-[12px] -translate-x-[50%] translate-y-[50%] bg-opacity-40 border-4 border-zinc-50 w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center'><i class='bx bx-play text-5xl leading-none'></i></div>
            <figure><img class='w-full object-center object-cover' src={"https://image.tmdb.org/t/p/w300/"+info.backdrop_path}>
            </figure>
         </div>
         <div class='w-full flex flex-col text-center p-5 items-center'>
            <h1 class='text-xl font-medium'>{ info.title }</h1>
            <span class='flex items-center gap-x-2 text-zinc-500'>valoracion <i class='bx bxs-star text-[#f75c03]'></i><abbr class='font-semibold text-zinc-50'>{ info.vote_average }</abbr></span>
         </div>
         <div class='flex flex-col gap-y-1 px-5'>
            <h6 class='text-zinc-500'>overview</h6>
            <p class='line-clamp-5'>{ info.overview }</p>
         </div>
         <div class='absolute flex left-0 bottom-0 w-full h-20'>
            <div class='cursor-pointer hover:bg-zinc-800 w-1/3 h-full flex flex-col justify-center items-center capitalize text-xs'>
               <i class='text-xl font-bold bx bx-check leading-none'></i>
               <span>mi lista</span>
            </div>
            <div class='cursor-pointer hover:bg-zinc-800 w-1/3 h-full flex flex-col justify-center items-center capitalize text-xs'>
               <i class='text-xl font-bold bx bx-info-circle leading-none'></i>
               <span>información</span>
            </div>
            <div class='cursor-pointer hover:bg-zinc-800 w-1/3 h-full flex flex-col justify-center items-center capitalize text-xs'>
               <i class='text-xl font-bold bx bx-down-arrow-circle leading-none'></i>
               <span>descargar</span>
            </div>
         </div>
      </div>
   </div>
   {/if}
   <div class='flex gap-x-2 items-center pl-4'>
      <i class='bx bx-film text-2xl text-[#F75C03]'></i>
      <h1 class='font-bold text-zinc-50 text-lg capitalize'>Películas de {title}</h1>
   </div>
   <div class='scroll flex items-center gap-x-3 h-[150px] overflow-x-auto overflow-hidden w-full group'>
      {#each movies as movie}
      <div>
         <figure on:click={ ()=> {modal = true;info=movie;} } class='group-hover:grayscale group-hover:scale-95 hover:!grayscale-0 hover:!scale-110 w-[92px] h-[135px] overflow-hidden bg-blue-900 rounded-xl duration-500'>
            <img class='object-bottom object-cover' src={"https://image.tmdb.org/t/p/w92/"+movie.poster_path} alt='poster'>
         </figure>
      </div>
      {/each}
   </div>
</div>

<style>
.scroll::-webkit-scrollbar {
   display: none;
}
</style>