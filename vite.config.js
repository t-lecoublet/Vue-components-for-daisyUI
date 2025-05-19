import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import * as path from "node:path";
import { fileURLToPath } from 'node:url'
import pkg from './package.json'
import { glob } from 'glob'

const createEntries = () => {
  const entries = new Map()
  const excludeFiles = ['.spec.ts', '.stories.ts']

  for (const file of glob.sync('lib/**/*.{ts,vue}')) {
    const fileName = file.split('/').at(-1)?.split('.')[0]

    if (excludeFiles.some((excludeFile) => file.endsWith(excludeFile))) {
      continue
    }

    if (!fileName) {
      continue
    }

    entries.set(`${fileName}`, fileURLToPath(new URL(file, import.meta.url)))
  }

  entries.set('index', fileURLToPath(new URL('lib/index.ts', import.meta.url)))

  const res = Object.fromEntries(entries)

  return res
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      '@lib': path.resolve(__dirname, 'lib'),
    },
  },
  build: {
    minify: false,
    copyPublicDir: false,
    emptyOutDir: false,
    lib: {
      entry: createEntries(),
      name: 'lib',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External modules that we don't want bundled into the library (automatically extracted from package.json peerDependencies)
      external: [...Object.keys(pkg.peerDependencies), 'tailwindcss', 'tailwindcss/resolveConfig'],
      output: {
        assetFileNames: '[name][extname]',
        entryFileNames: '[format]/[name].js',
        // Fix for https://github.com/vitejs/vite/issues/9214
        chunkFileNames: (assetInfo) => {
          const suffixToRemove = '.vue_vue_type_script_setup_true_lang'

          if (assetInfo.name?.endsWith(suffixToRemove)) {
            return `[format]/chunks/${assetInfo.name.slice(0, -suffixToRemove.length)}.js`
          } else {
            return '[format]/chunks/[name].js'
          }
        },
      },
    },
  },
});
