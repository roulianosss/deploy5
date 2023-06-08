import {defineConfig} from "vite"
import injectScriptPlugin from "./src/url.js"

export default defineConfig({
    base: "./",
    build: {
        outDir: "dist/site"
    },
    plugins: [injectScriptPlugin()]
})