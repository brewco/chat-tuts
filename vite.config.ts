import { defineConfig } from 'vite'
import path from "path"

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    server: {
        port: 8080,
    },
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
        ssr: true,
        lib: {
            entry: path.resolve(__dirname, 'src/server.ts'),
            name: 'server',
            fileName: "server"
        }
    }
})