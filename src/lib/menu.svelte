<script>
   let menu = false
</script>
<div class='fixed z-[10000] inset-0 w-full h-14 bg-zinc-900 bg-opacity-60 flex items-center justify-between px-7 text-zinc-50'>
   <div on:click={ ()=> menu = !menu }><i class='hover:animate-pulse text-xl bx bx-menu cursor-pointer duration-500 { menu ? 'rotate-180':''}'></i></div>
   <div><i class='hover:animate-pulse text-xl bx bx-search cursor-pointer'></i></div>
</div>
<div class="z-[9999] absolute inset-0 origin-top w-full h-full bg-zinc-900 bg-opacity-50 duration-500 { menu ? '':'scale-y-0'}"></div>

<div class='fixed z-[9998] bottom-0 left-0 w-full h-12 bg-[#F75C03] flex items-center justify-center px-14 text-zinc-50'>
   <nav class='w-full flex justify-between text-xs'>
      <div class='flex flex-col items-center'>
         <i class='hover:animate-pulse cursor-pointer text-xl bx bxs-home leading-none'></i>
         <span class='capitalize'>inicio</span>
      </div>
      <div class='relative flex flex-col items-center'>
         <i class='hover:animate-pulse cursor-pointer text-xl bx bx bxs-notification leading-none'></i>
         <span class='capitalize'>novedades</span>
      </div>
      <div class='flex flex-col items-center'>
         <i class='hover:animate-pulse cursor-pointer text-xl bx bxs-down-arrow-circle leading-none'></i>
         <span class='capitalize'>descargar</span>
      </div>
   </nav>
</div>