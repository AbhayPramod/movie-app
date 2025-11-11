module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components': './components', // Adjust this path to your actual source directory
            '@/assets': './assets',
            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};