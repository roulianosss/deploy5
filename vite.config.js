import {defineConfig} from "vite"

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                script: "./src/altaprofits.js",
                style: "./src/altaprofits.scss"
            },
            output: {
                entryFileNames: "assets/main.js",
                assetFileNames: "assets/main.css"
            }
        }
    }
})