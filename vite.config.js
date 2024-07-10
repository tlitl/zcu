import { resolve } from 'path'

export default {

    // root: resolve(__dirname, 'src'),
    // base: '/',
    publicDir: 'public',
    build: {
        // outDir: 'dist',
        // assetsDir: 'asstes',
        // manifest: true,
        // copyPublicDir: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // team: resolve(__dirname, 'page/team.html'),
                // zhuanye1: resolve(__dirname, 'zhuanye/zy-1.html'),
                // zhuanye2: resolve(__dirname, 'zhuanye/zy-2.html'),
                // zhuanye3: resolve(__dirname, 'zhuanye/zy-3.html'),
            },
        },
    },
    server: {
        port: 8081,
        open: 'index.html',
        
    }
}