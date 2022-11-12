<script>
   import { fade, fly } from 'svelte/transition'
   const menu = ['bx-search','bx-home','bx-calendar','bx-tv','bx-film']
   const opciones = ['search','watch now','latest','tv show','movies','more']
   let modal = false
</script>
<div class='z-[99991] fixed flex h-screen text-zinc-100 text-2xl bg-[#F75C03] bg-opacity-90 {modal ? "w-full bg-opacity-[75%] backdrop-blur-[2px]":"w-20"} transition-[width,background,backdrop-filter] duration-500'>
   <div class='w-20 border-r border-zinc-50/10 h-full flex flex-col items-center justify-center gap-y-6'>
      {#each menu as icon}
         <i class='bx { icon } py-1.5 border-b-4 border-transparent hover:border-[#032541] transition-[border] duration-500'></i>
      {/each}
         <i on:click={ ()=> modal = !modal } class='bx bx-plus cursor-pointer hover:text-[#032541] transition-[color] duration-300'></i>
   </div>
   {#if modal}
   <div in:fly="{{ delay: 400, y:-700 }}" out:fly="{{ y:-700 }}" class='fixed left-28 h-screen flex flex-col gap-y-3 items-start justify-center'>
      {#each opciones as op}
         <span class='relative font-medium capitalize duration-300 cursor-pointer w-40 h-12 px-4 flex items-center justify-start hover:scale-150 hover:origin-left hover:text-[#032541] transition-[color,transform,transform-origin] duration-400'>{ op }</span>
      {/each}
   </div>
   {/if}
</div>