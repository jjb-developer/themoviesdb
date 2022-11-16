<script>
   export let movie;
   const logo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
</script>

<div class='w-full pt-48 pb-20 flex flex-col items-center justify-center gap-y-8 text-zinc-50'>
   <div class='relative w-[200px] bg-red-500 rounded-md overflow-hidden'>
      <img class='absolute top-2.5 right-2.5 h-[10px]' src={ logo } alt='logo'>
      <img class='border-[3px] border-zinc-50' src={'https://image.tmdb.org/t/p/w200/'+movie.poster_path} alt='backdrop'>
   </div>
   <div class='px-4 pt-5 text-3xl line-clamp-1'>{ movie.title }</div>
   <div class='w-full flex gap-x-8 items-center justify-center'>
      <div class='flex flex-col items-center'>
         <i class='cursor-pointer text-4xl bx bx-list-ul'></i>
         <span class='capitalize'>lista</span>
      </div>
      <div class='cursor-pointer w-64 h-14 bg-zinc-50 text-zinc-900 rounded-md flex items-center justify-center'>
         <i class='text-4xl bx bx-play'></i>
         <span class='capitalize text-2xl font-semibold'>reproducir</span>
      </div>
      <div class='flex flex-col items-center'>
         <i class='cursor-pointer text-4xl bx bx-info-circle'></i>
         <span class='capitalize'>info</span>
      </div>
   </div>
</div>

<style>
</style>