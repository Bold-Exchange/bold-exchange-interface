module.exports = {
 theme: {
    extend: {
      height: {
        500: "500px",
      },
      colors: {
        hc: 'rgb(29, 30, 36)',
      },
    },
  }, 
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/layouts/**/*.tsx",
  ],
};
