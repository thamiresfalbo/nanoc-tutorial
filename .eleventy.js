module.exports = function(eleventyConfig) {
  eleventyConfig.addPasstroughCopy("img");
    // Return your Object options:
    return {
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    }
  };
