import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [    vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => ['<center>','<maction>','<math>','<menclose>','<merror>','<mfenced>','<mfrac>','<mi>','<mmultiscripts>','<mn>','<mo>','<mover>','<mpadded>','<mphantom>','<mroot>','<mrow>','<ms>','<mspace>','<msqrt>','<mstyle>','<msub>','<msubsup>','<msup>','<mtable>','<mtd>','<mtext>','<mtr>','<munder>','<munderover>','<semantics>',].includes(tag)
      }
    }
  }),],
  base:"/cau-china/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname,'404.html'),
      }
    }
  }
})