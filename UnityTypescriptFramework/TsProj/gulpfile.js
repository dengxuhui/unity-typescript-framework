const rollup = require("rollup");
const typescript = require("rollup-plugin-typescript2");
const glsl = require("rollup-plugin-glsl");

function build(cb) {
    return rollup.rollup({
        input: './src/Main.ts',
        treeshake: true,//建议忽略
        plugins: [
            typescript({
                check: false, //Set to false to avoid doing any diagnostic checks on the code
                tsconfigOverride: {compilerOptions: {removeComments: true}}
            }),
            glsl({
                // By default, everything gets included
                include: /.*(.glsl|.vs|.fs)$/,
                sourceMap: false,
                compress: false
            }),
            /*terser({
                output: {
                },
                numWorkers:1,//Amount of workers to spawn. Defaults to the number of CPUs minus 1
                sourcemap: false
            })*/
        ]
    }).then(bundle => {
        bundle.write({
            file: '../Assets/AssetsPackage/JS/bundle.js',
            format: 'iife',
            name: 'unity',
            sourcemap: true
        }).then(() => {
            return cb();
        });
    });
}

module.exports.build = build;