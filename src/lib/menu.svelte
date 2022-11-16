<script>
   let menu = false
</script>
<div class='fixed z-[10000] inset-0 w-[inherit] h-14 bg-[#f75c03] flex items-center justify-between px-7 text-zinc-50'>
   <div on:click={ ()=> menu = !menu }><i class='hover:animate-pulse text-xl bx bx-menu cursor-pointer duration-500 { menu ? 'rotate-180':''}'></i></div>
   <div><i class='hover:animate-pulse text-xl bx bx-search cursor-pointer'></i></div>
</div>
<div class="z-[9999] fixed inset-0 origin-top w-full h-screen bg-[#f75c03] bg-opacity-90 duration-[2s] { menu ? '':'scale-y-0'} flex flex-col gap-y-5 text-2xl items-center justify-center text-zinc-50 font-medium tracking-tight">
   <span class='hover:scale-[1.7] cursor-pointer duration-500 origin-center { menu ? '':'scale-y-0'}'>Inicio</span>
   <span class='hover:scale-[1.7] cursor-pointer duration-500 origin-center { menu ? '':'scale-y-0'}'>Series</span>
   <span class='hover:scale-[1.7] cursor-pointer duration-500 origin-center { menu ? '':'scale-y-0'}'>Películas</span>
   <i on:click={ ()=> menu = false } class='cursor-pointer fixed bottom-32 text-5xl bx bxs-x-circle origin-center duration-200 { menu ? 'delay-700':'scale-0'}'></i>
</div>

<div class='fixed z-[9998] bottom-0 left-0 w-full h-12 bg-[#F75C03] text-zinc-50'>
   <nav class='w-full h-[inherit] flex text-xs'>
      <div class='w-1/3 flex flex-col items-center justify-center'>
         <i class='cursor-pointer text-xl bx bxs-home leading-none'></i>
         <span class='capitalize'>inicio</span>
      </div>
      <div class='w-1/3 flex flex-col items-center justify-center'>
         <i class='cursor-pointer text-xl bx bx bxs-notification leading-none'></i>
         <span class='capitalize'>novedades</span>
      </div>
      <div class='w-1/3 flex flex-col items-center justify-center'>
         <i class='cursor-pointer text-xl bx bxs-down-arrow-circle leading-none'></i>
         <span class='capitalize'>descargar</span>
      </div>
   </nav>
</div>