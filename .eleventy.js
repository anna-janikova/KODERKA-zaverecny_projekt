module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("obrazy");
    //eleventyConfig.addPassthroughCopy("detaily-obrazu");
    eleventyConfig.addPassthroughCopy("photos");
    eleventyConfig.addPassthroughCopy("css");

    return {
        templateFormats: ["njk", "html", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      }
    
   };
   