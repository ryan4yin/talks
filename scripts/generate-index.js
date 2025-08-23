const fs = require("fs")
const path = require("path")

// Read the template
const template = fs.readFileSync("templates/index.html", "utf8")

// Find all directories with package.json files
const talkDirs = fs.readdirSync(".").filter((item) => {
  const itemPath = path.join(".", item)
  return fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, "slides.md"))
})

// Generate talk list HTML
const talkListHtml = talkDirs
  .map((dir) => {
    // Preserve date prefix format (YYYY-MM-DD) and convert to YYYY/MM/DD format
    const title = dir
      .replace(/^(\d{4})-(\d{2})-(\d{2})-/, (match, year, month, day) => {
        return `${year}/${month}/${day} - `
      })
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
    return `
    <li class='talk-item'>
        <a href='${dir}/' class='talk-link'>📊 ${title}</a>
        <div class='talk-description'>Click to view the presentation</div>
    </li>
  `
  })
  .join("")

// Get current timestamp
const timestamp = new Date().toLocaleString()

// Replace placeholders
const indexHtml = template
  .replace("{{TALK_LIST}}", talkListHtml)
  .replace("{{TIMESTAMP}}", timestamp)

// Ensure talks directory exists
if (!fs.existsSync("talks")) {
  fs.mkdirSync("talks")
}

// Write the generated index.html
fs.writeFileSync("talks/index.html", indexHtml)

console.log(`Generated index.html with ${talkDirs.length} talks`)
