import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   
  plugins: [react(),tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig(({ command }) => ({
//   plugins: [react(), tailwindcss()],
//   // Only prefix with /new-site/ for production builds (staging the new site
//   // in a subfolder alongside the old one). Local dev (`npm run dev`) always
//   // serves from '/' so you can visit routes directly without the prefix.
//   base: command === 'build' ? '/new-site/' : '/',
//   server: {
//     host: '0.0.0.0',
//     port: 5173
//   }
// }))