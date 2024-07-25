module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css");

  // Global site data
  eleventyConfig.addGlobalData("site", {
    name: "hip.dev",
    description: "Personal portfolio",
    author: "Pedro Canterini",
    url: "https://hip.dev",
    image: ""
  });

  // Add absoluteUrl filter
  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    try {
      return new URL(url, base).toString();
    } catch(e) {
      console.error(`Invalid URL: ${url}`);
      return url;
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};