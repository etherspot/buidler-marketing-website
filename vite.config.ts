import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import cjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-polyfill-node";
import replace from "@rollup/plugin-replace";
import babel from 'rollup-plugin-babel';

// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     "process.env": {},
//   },
//   plugins: [react(), svgr()],
//   build: {
//     commonjsOptions: { transformMixedEsModules: true },
//     // minify: false,
//     // target: "es2015",
//     outDir: "dist",
//     sourcemap: true,
//     // commonjsOptions: { include: [] },
//     rollupOptions: {
//       plugins: [
//         // Enable rollup polyfills plugin
//         // used during production bundling
//         nodePolyfills({
//           include: ["node_modules/**/*.js", "../../node_modules/**/*.js"],
//         }),
//         cjs(),
//       ],
//     },
//   },
//   optimizeDeps: {
//     disabled: false,
//     esbuildOptions: {
//       // Node.js global to browser globalThis
//       define: {
//         global: "globalThis",
//       },
//       // Enable esbuild polyfill plugins
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           buffer: true,
//         }),
//       ],
//     },
//   },
// });

import { resolve } from "path";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  // envDir: "./env_web",
  plugins: [react(), svgr()],
  build: {
    // minify: false,
    // target: "es2015",
    outDir: "dist_web",
    sourcemap: true,
    // commonjsOptions: { include: [] },
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        nodePolyfills({
          include: ["node_modules/**/*.js", "../../node_modules/**/*.js"],
        }),
        replace({
          "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        babel({
          exclude: "node_modules/**",
          presets: ["@babel/preset-react"],
          babelHelpers: "bundled",
        }),
        cjs({
          include: /node_modules/,
          requireReturnsDefault: 'auto',
        }),
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
});
