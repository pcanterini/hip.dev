module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};