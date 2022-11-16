/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{svelte,html}"],
   theme: {
      extend: {},
      screens: {
         ss: '320px',
         ssx: '400px',
         xs: '480px',
         xsx: '560px',
         sm: '640px',
         smx: '720px',
         md: '768px',
         mdx: '896px',
         lg: '1024px',
         xl: '1280px'
      }
   },
   plugins: [require('@tailwindcss/line-clamp')],
}
