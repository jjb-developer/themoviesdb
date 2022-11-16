<script>
   export let movies;
   export let title;
</script>

<div class='flex flex-col gap-y-4 px-5 pb-5'>
   <div class='flex gap-x-4 items-center'>
      <i class='bx bx-film text-3xl text-[#F75C03]'></i>
      <h1 class='font-bold text-zinc-50 text-3xl capitalize'>Películas de {title}</h1>
   </div>
   <div class='scroll flex items-center gap-x-3 h-[250px] overflow-x-auto overflow-hidden w-full group'>
      {#each movies as movie}
      <div>
         <figure class='group-hover:grayscale group-hover:scale-95 hover:!grayscale-0 hover:!scale-110 w-[154px] h-[220px] overflow-hidden bg-zinc-800 rounded-xl duration-500'>
            <img class='object-bottom object-cover' src={"https://image.tmdb.org/t/p/w154/"+movie.poster_path} alt='poster'>
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