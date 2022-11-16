<script>
   let menu = false
</script>
<div class='fixed z-[10000] inset-0 w-full h-24 bg-zinc-900 bg-opacity-60 flex items-center justify-between px-7 text-zinc-50'>
   <div on:click={ ()=> menu = !menu }><i class='hover:animate-pulse text-4xl bx bx-menu cursor-pointer duration-500 { menu ? 'rotate-180':''}'></i></div>
   <div><i class='hover:animate-pulse text-3xl bx bx-search cursor-pointer'></i></div>
</div>
<div class="z-[9999] absolute inset-0 origin-top w-full h-full bg-zinc-900 bg-opacity-50 duration-500 { menu ? '':'scale-y-0'}"></div>

<div class='fixed z-[9998] bottom-0 left-0 w-full h-24 bg-[#F75C03] flex items-center justify-center px-14 text-zinc-50'>
   <nav class='w-full flex justify-between'>
      <div class='flex flex-col items-center'>
         <i class='hover:animate-pulse cursor-pointer text-4xl bx bxs-home'></i>
         <span class='capitalize'>inicio</span>
      </div>
      <div class='relative flex flex-col items-center'>
         <span class='absolute top-0 left-10 w-5 h-5 bg-[#032541] rounded-full flex items-center justify-center text-xs font-medium'>4</span>
         <i class='hover:animate-pulse cursor-pointer text-4xl bx bx bxs-notification'></i>
         <span class='capitalize'>novedades</span>
      </div>
      <div class='flex flex-col items-center'>
         <i class='hover:animate-pulse cursor-pointer text-4xl bx bxs-down-arrow-circle'></i>
         <span class='capitalize'>descargar</span>
      </div>
   </nav>
</div>