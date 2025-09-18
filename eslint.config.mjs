import * as mdx from "eslint-plugin-mdx";

export default [
  mdx.flat,
  {
    files: ["src/**/*.mdx"],
    rules: {
      "no-unused-vars": "error",
    },
  },
];
