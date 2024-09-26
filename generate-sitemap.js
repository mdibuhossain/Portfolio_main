const generator = require("sitemap-generator");

// Create a sitemap generator instance
const generatorInstance = generator("https://ibrahim.engineer/", {
  stripQuerystring: false,
  filepath: "./public/sitemap.xml", // Save the sitemap in the public directory
  maxDepth: 0, // Specify the depth level if needed
});

// Register event listeners
generatorInstance.on("done", () => {
  console.log("Sitemap created successfully!");
});

// Start the generator
generatorInstance.start();
