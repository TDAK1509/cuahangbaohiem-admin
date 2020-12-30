module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  restoreMocks: true,
  setupFiles: ["jest-localstorage-mock"]
};
