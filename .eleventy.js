module.exports = function(eleventyConfig) {
  // Copy admin folder to output
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
