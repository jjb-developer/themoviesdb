<script>
   export let movie;
   const logo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
</script>

<div style='background-image: url({"https://image.tmdb.org/t/p/w780/"+movie.backdrop_path});' class='relative bg-no-repeat bg-cover bg-center w-[inherit] pt-24 pb-10 flex flex-col items-center justify-center gap-y-7 text-zinc-50'>
   <div class='z-0 absolute inset-0 bg-gradient-to-t from-[#032541] to-[#032541]/50 w-full h-full '></div>
   <div class='relative w-[200px] rounded-md overflow-hidden'>
      <img class='absolute top-2.5 right-2.5 h-[10px]' src={ logo } alt='logo'>
      <img class='border-[3px] border-zinc-50' src={'https://image.tmdb.org/t/p/w200/'+movie.poster_path} alt='backdrop'>
   </div>
   <div class='z-[10] px-[5%] text-2xl line-clamp-1 tracking-tight font-medium text-center'>{ movie.title }</div>
   <div class='z-[10] w-full flex gap-x-4 items-center justify-center text-xs'>
      <div class='flex flex-col items-center'>
         <i class='cursor-pointer text-2xl bx bx-list-ul leading-none'></i>
         <span class='capitalize'>lista</span>
      </div>
      <div class='cursor-pointer w-[50%] h-10 bg-zinc-50 text-zinc-900 rounded-md flex items-center justify-center'>
         <i class='text-3xl bx bx-play'></i>
         <span class='capitalize text-xl font-semibold tracking-tighter'>reproducir</span>
      </div>
      <div class='flex flex-col items-center'>
         <i class='cursor-pointer text-2xl bx bx-info-circle leading-none'></i>
         <span class='capitalize'>info</span>
      </div>
   </div>
</div>

<style>
</style>