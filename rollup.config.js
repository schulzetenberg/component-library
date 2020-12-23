import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import copy from 'rollup-plugin-copy'

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist'] }),
			typescript(),
			copy({
				targets: [
					{ src: ['src/**/*.stories.*'], dest: 'dist/' }
				],
				flatten: false
			})
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];