const fs = require('fs');

function strip_comments(content) {
  return content
  .split("\n")
  .filter(line => !line.startsWith("#"))
  .join("\n")
  .trim();
}

const original_filename = process.argv[2];
const stripped = strip_comments(fs.readFileSync(original_filename, "utf8"));
const stripped_filename = original_filename + "_stripped";

fs.writeFile(stripped_filename, stripped, err => {
  if (err) throw err;
  console.log(`stripped version saved to: ${stripped_filename}`);
});
