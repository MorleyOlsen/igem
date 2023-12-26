// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\vite\\scrollListen\\1004new\\cau-china(local)";
var vite_config_default = defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ["<center>", "<maction>", "<math>", "<menclose>", "<merror>", "<mfenced>", "<mfrac>", "<mi>", "<mmultiscripts>", "<mn>", "<mo>", "<mover>", "<mpadded>", "<mphantom>", "<mroot>", "<mrow>", "<ms>", "<mspace>", "<msqrt>", "<mstyle>", "<msub>", "<msubsup>", "<msup>", "<mtable>", "<mtd>", "<mtext>", "<mtr>", "<munder>", "<munderover>", "<semantics>"].includes(tag)
      }
    }
  })],
  base: "/cau-china/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "404.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2aXRlXFxcXHNjcm9sbExpc3RlblxcXFwxMDA0bmV3XFxcXGNhdS1jaGluYShsb2NhbClcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHZpdGVcXFxcc2Nyb2xsTGlzdGVuXFxcXDEwMDRuZXdcXFxcY2F1LWNoaW5hKGxvY2FsKVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovdml0ZS9zY3JvbGxMaXN0ZW4vMTAwNG5ldy9jYXUtY2hpbmEobG9jYWwpL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFsgICAgdnVlKHtcclxuICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgIGlzQ3VzdG9tRWxlbWVudDogdGFnID0+IFsnPGNlbnRlcj4nLCc8bWFjdGlvbj4nLCc8bWF0aD4nLCc8bWVuY2xvc2U+JywnPG1lcnJvcj4nLCc8bWZlbmNlZD4nLCc8bWZyYWM+JywnPG1pPicsJzxtbXVsdGlzY3JpcHRzPicsJzxtbj4nLCc8bW8+JywnPG1vdmVyPicsJzxtcGFkZGVkPicsJzxtcGhhbnRvbT4nLCc8bXJvb3Q+JywnPG1yb3c+JywnPG1zPicsJzxtc3BhY2U+JywnPG1zcXJ0PicsJzxtc3R5bGU+JywnPG1zdWI+JywnPG1zdWJzdXA+JywnPG1zdXA+JywnPG10YWJsZT4nLCc8bXRkPicsJzxtdGV4dD4nLCc8bXRyPicsJzxtdW5kZXI+JywnPG11bmRlcm92ZXI+JywnPHNlbWFudGljcz4nLF0uaW5jbHVkZXModGFnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSksXSxcclxuICBiYXNlOlwiL2NhdS1jaGluYS9cIixcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCc0MDQuaHRtbCcpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1VLFNBQVMsb0JBQW9CO0FBQ2hXLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFGeEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFLLElBQUk7QUFBQSxJQUNoQixVQUFVO0FBQUEsTUFDUixpQkFBaUI7QUFBQSxRQUNmLGlCQUFpQixTQUFPLENBQUMsWUFBVyxhQUFZLFVBQVMsY0FBYSxZQUFXLGFBQVksV0FBVSxRQUFPLG1CQUFrQixRQUFPLFFBQU8sV0FBVSxhQUFZLGNBQWEsV0FBVSxVQUFTLFFBQU8sWUFBVyxXQUFVLFlBQVcsVUFBUyxhQUFZLFVBQVMsWUFBVyxTQUFRLFdBQVUsU0FBUSxZQUFXLGdCQUFlLGFBQWMsRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUN0VztBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUMsQ0FBRTtBQUFBLEVBQ0gsTUFBSztBQUFBLEVBQ0wsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxRQUFRLGtDQUFVLFVBQVU7QUFBQSxNQUNwQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
