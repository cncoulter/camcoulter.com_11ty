const { DateTime } = require("luxon"); // Luxon is a JavaScript library for working with dates and times: https://moment.github.io/luxon/
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img"); // Image plugin
const path = require("node:path"); // used for Image plugin

module.exports = async function (eleventyConfig) {
  
	// |---------|
	// | Plugins |
	// |---------|

	// Add IdAttributePlugin, which automatially adds IDs to all your headings
	// https://www.11ty.dev/docs/plugins/id-attribute/
	const { IdAttributePlugin } = await import("@11ty/eleventy");
	eleventyConfig.addPlugin(IdAttributePlugin);

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, { // images plugin
		// output image formats
		formats: ["webp", "jpeg"],

		// output image widths
		widths: [300, 600, 1200, 1920, 2400],

		// output image directory
		urlPath: "/assets/images/",

		// output image filename
		filenameFormat: function (id, src, width, format, options) {
			const extension = path.extname(src);
			const name = path.basename(src, extension);
			return `${name}-${width}.${format}`;
		},

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
			},
			fallback: "smallest",
		},
	});

	// |------------------------------|
	// | Passthroughs & Watch Targets |
	// |------------------------------|

	// Copy these files from src/ to public/ without modifying them.
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addPassthroughCopy("./src/*.txt");
	eleventyConfig.addPassthroughCopy("./src/*.png");
	eleventyConfig.addPassthroughCopy("./src/*.ico");
	eleventyConfig.addPassthroughCopy("./src/site.webmanifest");

	// Trigger a build when you edit these files.
	eleventyConfig.addWatchTarget("./src/css/");
	
	// |-------------|
	// | Collections |
	// |-------------|

	// Create the collection: categorizedPages
	// which includes every page that has categorizedUnder in its front matter.
	eleventyConfig.addCollection("categorizedPages", function (collection) {
		return collection.getAll().filter((item) => item.data.categorizedUnder);
	});

	// Create the collection: taggedPages
	// which includes every page that has taggedWith in its front matter.
	eleventyConfig.addCollection("taggedPages", function (collection) {
		return collection.getAll().filter((item) => item.data.taggedWith);
	});

	// Create the collection: categories
	// which is an array of every category (from categorizedUnder front matter).
	eleventyConfig.addCollection("categories", function (collection) {
		const categorizedPages = collection.getAll().filter((item) => item.data.categorizedUnder);
		const allCategories = [];
		categorizedPages.forEach((page) => {
			allCategories.push(...page.data.categorizedUnder);
		});
		let duplicatesRemoved = [...new Set(allCategories)];
		return duplicatesRemoved.sort();
		// To integrate capitals and lowercase, add (a, b) => a.localeCompare(b) within sort()
	});

	// Create the collection: tags
	// which is an array of every tag (from taggedWith front matter).
	eleventyConfig.addCollection("tags", function (collection) {
		const categorizedPages = collection.getAll().filter((item) => item.data.taggedWith);
		const allTags = [];
		categorizedPages.forEach((page) => {
			allTags.push(...page.data.taggedWith);
		});
		let duplicatesRemoved = [...new Set(allTags)];
		return duplicatesRemoved.sort();
		// To integrate capitals and lowercase, add (a, b) => a.localeCompare(b) within sort()
	});

	// |---------|
	// | Filters |
	// |---------|

	// Create the filter: humanReadableDateTime
	// See: https://github.com/moment/luxon/blob/master/docs/formatting.md
  	// Given an ISO 8601 datetime value,
	// Returns a human readable datetime value.
	// Example Use: {{ date | humanReadableDateTime }}
	// Example Return: 5 June 2025 7:42 AM PDT
	eleventyConfig.addFilter("humanReadableDateTime", dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("d LLLL y h:mm a ZZZZ");
  	});

	// Create the filter: humanReadableDate
	// See: https://github.com/moment/luxon/blob/master/docs/formatting.md
  	// Given an ISO 8601 datetime value,
	// Returns a human readable datetime value.
	// Example Use: {{ date | humanReadableDate }}
	// Example Return: June 5, 2025
	eleventyConfig.addFilter("humanReadableDate", dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("LLLL d, y");
  	});

	// Date formatting (for URLs)
	// See: https://github.com/moment/luxon/blob/master/docs/formatting.md
	// Given an ISO 8601 datetime value,
	// Returns year/month/day.
	// Example Use: {{ date | URLDate }}
	// Example Return: 2025/06/05
  	eleventyConfig.addFilter("URLDate", dateObj => {
    	return DateTime.fromJSDate(dateObj).toFormat("y/LL/dd");
  	});

	// Date formatting (machine readable)
	// See: https://github.com/moment/luxon/blob/master/docs/formatting.md
	// Given an ISO 8601 datetime value,
	// Returns an ISO 8601 datetime value.
	// Example Use: {{ date | machineReadable }}
	// Example Return: 2025-06-05T07:42:00.000-07:00
  	eleventyConfig.addFilter("machineReadable", dateObj => {
    	return DateTime.fromJSDate(dateObj).toISO();
  	});

	// Create the filter: categorizedUnder
	// Given collections.categorizedPages and a category
	// Returns an array with all pages that are categorizedUnder that category.
	// Example Use: {% for item in collections.categorizedPages | categorizedUnder("web design") %}
	// Example Return: an array of all pages that are categorizedUnder "web design"
	eleventyConfig.addFilter("categorizedUnder", function(categorizedPages, category) {
		const relevantPages = [];
		categorizedPages.forEach((page) => {
			if ([...page.data.categorizedUnder].includes(category)) {
				relevantPages.push(page);
			}
		});
		return relevantPages;
	});

	// Create the filter: taggedWith
	// Given collections.taggedPages and a tag
	// Returns an array with all pages that are taggedWith that tag.
	// Example Use: {% for item in collections.taggedPages | taggedWith("web design") %}
	// Example Return: an array of all pages that are taggedWith "web design"
	eleventyConfig.addFilter("taggedWith", function(taggedPages, tag) {
		const relevantPages = [];
		taggedPages.forEach((page) => {
			if ([...page.data.taggedWith].includes(tag)) {
				relevantPages.push(page);
			}
		});
		return relevantPages;
	});

	// Create the filter: authorIs
	// Given a collection of pages and a code_name
	// Returns an array with all pages in that collection that have author set to that code_name in their front matter.
	// Example Use: {% for item in collections.post | authorIs(code_name) %}
	// Example Return: an array of all pages that have author: code_name
	eleventyConfig.addFilter("authorIs", function(collection, code_name) {
		const relevantPages = [];
		collection.forEach((page) => {
			if (page.data.author == code_name) {
				relevantPages.push(page);
			}
		});
		return relevantPages;
	});
	
	// Create the filter: personIs
	// Given collections.people and a code_name
	// Returns an array with all pages in collections.people that have code_name set to given code_name in their front matter. (Ideally, it returns an array of one. If the array includes multiple pages, ensure all code_names are unique.)
	// Example Use: {% for item in collections.people | personIs(author) %}
	// Example Return: an array of all pages that have author: code_name (ideally an array of one)
	eleventyConfig.addFilter("personIs", function(people, author) {
		const relevantPages = [];
		people.forEach((person) => {
			if (person.data.code_name === author) {
				relevantPages.push(person);
			}
		});
		return relevantPages;
	});

	// Create the filter: findImage
	// Given collections.images and an image's title
	// Returns an array with all pages in collections.images that have title set to given image title in their front matter. (Ideally, it returns an array of one. If the array includes multiple pages, ensure all title values in the images collection are unique.)
	// Example Use: {% for item in collections.images | findImage(image) %}
	// Example Return: an array of all pages that have image: image (ideally an array of one)
	eleventyConfig.addFilter("findImage", function(images, image) {
		const relevantPages = [];
		images.forEach((item) => {
			if (item.data.title === image) {
				relevantPages.push(item);
			}
		});
		return relevantPages;
	});

	// Create the filter: metaPrep
	// Given a filepath for an image,
	// Returns an updated filepath for the image.
	// Makes it end with "-300.jpeg"
	// We use this because the images plugin will name our images in this way.
	eleventyConfig.addFilter("metaPrep", function(filePath) {
		// Safety check: ensure we actually have a string to work with
		if (!filePath || typeof filePath !== "string") {
			return filePath;
		}
		// Find the final dot and extension, and replace it with "-300.jpeg"
		return filePath.replace(/\.[^.]+$/, "-300.jpeg");
	});

	// |------------|
	// | Shortcodes |
	// |------------|

	// Create the shortcode: {% year %}
	// which returns the current year.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// |------------|
	// | Transforms |
	// |------------|

	// Automatically inject tabindex="-1" into all headings
	// See https://www.camcoulter.com/2024/05/23/skip-links-and-tabindex/
	eleventyConfig.addTransform("add-tabindex", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			// Find <h1...> through <h6...> and safely inject tabindex="-1" 
			// If tabindex="-1" already exists, don't add it a second time
			return content.replace(/<(h[1-6])(?![^>]*\btabindex\b)([^>]*)>/gi, '<$1 tabindex="-1"$2>');
		}
		return content;
	});

	// Generates a Table of Contents (TOC) anywhere you have "[INSERT_TOC]".
	// Depends on the IdAttributePlugin adding ID attributes to all your headings.
	eleventyConfig.addTransform("add-toc", function(content) {
		if ((this.page.outputPath || "").endsWith(".html") && content.includes("[INSERT_TOC]")) {

			let toc = `<div class="raised">\n  <h2>Contents</h2>\n  <ol id="toc" class="section-nav">\n`;
			let currentLevel = 2;
			let first = true;

			// Find <h1> through <h6> tags that have an ID
			const regex = /<h([1-6])[^>]*\bid="([^"]+)"[^>]*>(.*?)<\/h\1>/gi;
			let match;
			let foundHeadings = false;
			let passedFirstH1 = false;

			while ((match = regex.exec(content)) !== null) {
				const level = parseInt(match[1]);

				// Once we see the first h1, flip the flag to true and skip the h1 itself
				if (level === 1 && !passedFirstH1) {
					passedFirstH1 = true;
					continue;
				}

				// If we haven't passed the first h1 yet, or if it's another h1 later on, skip it
				if (!passedFirstH1 || level === 1) {
					continue;
				}

				foundHeadings = true;
				const id = match[2];
				const text = match[3];

				if (first) {
					if (level > 2) {
						toc += "<ol>\n".repeat(level - 2);
					}
					first = false;
				} else {
					if (level > currentLevel) {
						toc += "\n" + "<ol>\n".repeat(level - currentLevel);
					} else if (level < currentLevel) {
						toc += "</li>\n" + "</ol>\n</li>\n".repeat(currentLevel - level);
					} else {
						toc += "</li>\n";
					}
				}

				toc += `    <li class="toc-entry toc-h${level}"><a href="#${id}">${text}</a>`;
				currentLevel = level;
			}

			if (foundHeadings) {
				toc += "</li>\n";
				if (currentLevel > 2) {
					toc += "</ol>\n</li>\n".repeat(currentLevel - 2);
				}
				toc += "  </ol>\n</div>";

				// Targets [INSERT_TOC] AND the paragraph tags wrapping it
				return content
					.replace(/<p>\s*\[INSERT_TOC\]\s*<\/p>/g, toc)
					.replace(/\[INSERT_TOC\]/g, toc); // Fallback just in case it wasn't wrapped
			} else {
				// Erase the marker and its wrapping <p> tags if no subheadings exist
				return content
					.replace(/<p>\s*\[INSERT_TOC\]\s*<\/p>/g, "")
					.replace(/\[INSERT_TOC\]/g, "");
			}
		}
		return content;
	});

	// |--------|
	// | Return |
	// |--------|
	
	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: "src",
			output: "public",
		},
	};
	
};
