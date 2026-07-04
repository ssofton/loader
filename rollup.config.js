import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default [

    // ES Module
    {
        input: "src/loader.js",

        output: {
            file: "dist/loader.esm.js",
            format: "es"
        },

        plugins: [
            resolve()
        ]
    },

    // UMD
    {
        input: "src/loader.js",

        output: {
            file: "dist/loader.umd.js",
            format: "umd",
            name: "Loader"
        },

        plugins: [
            resolve()
        ]
    },

    // Minified UMD
    {
        input: "src/loader.js",

        output: {
            file: "dist/loader.min.js",
            format: "umd",
            name: "Loader"
        },

        plugins: [
            resolve(),
            terser()
        ]
    }

];