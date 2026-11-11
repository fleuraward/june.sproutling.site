module.exports = function(eleventyConfig) {  

  eleventyConfig.on("beforeBuild", () => {
    console.log("⏳ Build starting...");
  });

  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.on("afterBuild", () => {
    console.log("✅ Build complete. Have a nice day!");
  });

  
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data?.permalinkStyle === "default") return;
      return `${data.page.filePathStem}.html`;
    }
  });

  return {
    dir: {
      input: "src",
      output: "june.sproutling.site",
    },
  };
};