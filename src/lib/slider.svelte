<script>
   export let movies;
   export let title;
</script>

<div class='flex w-[inherit] flex-col gap-y-2 px-5 pb-5'>
   <div class='flex gap-x-2 items-center'>
      <i class='bx bx-film text-2xl text-[#F75C03]'></i>
      <h1 class='font-bold text-zinc-50 text-lg capitalize'>Películas de {title}</h1>
   </div>
   <div class='scroll flex items-center gap-x-3 h-[150px] overflow-x-auto overflow-hidden w-full group'>
      {#each movies as movie}
      <div>
         <figure class='group-hover:grayscale group-hover:scale-95 hover:!grayscale-0 hover:!scale-110 w-[92px] h-[135px] overflow-hidden bg-blue-900 rounded-xl duration-500'>
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