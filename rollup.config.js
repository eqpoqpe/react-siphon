import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
        name: "react-ts-lib"
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser()
    ],
  },
  {
    input: "build/esm/types/index.d.ts",
    output: [{ file: "build/index.d.ts", format: "esm" }],
    plugins: [dts.default()]
  }
]