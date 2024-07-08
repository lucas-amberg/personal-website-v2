module.exports = {
  plugins: {
    "@pandacss/dev/postcss": {},
    autoprefixer: {},
    "postcss-import": {}, // This guarantees import order of css files for nextjs. Required for panda to work.
  },
};