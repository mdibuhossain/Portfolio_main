// const generator = require("sitemap-generator");

// // Create a sitemap generator instance
// const generatorInstance = generator("https://ibrahim.engineer/", {
//   stripQuerystring: false,
//   filepath: "./public/sitemap.xml", // Save the sitemap in the public directory
//   maxDepth: 0, // Specify the depth level if needed
// });

// // Register event listeners
// generatorInstance.on("done", () => {
//   console.log("Sitemap created successfully!");
// });

// // Start the generator
// generatorInstance.start();

const fs = require('fs');

// Define the URLs you want to include in the sitemap
const urls = [
  "https://ibrahim.engineer/",
  "https://ibrahim.engineer/about",
  "https://ibrahim.engineer/projects",
  "https://ibrahim.engineer/contact"
];

// Create the XML sitemap structure with newlines and indentation for readability
const sitemap = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}\n</urlset>\n`;

// Write the sitemap to the public directory
fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf8');

console.log('Sitemap created successfully!');

