// Fetches AI & robotics headlines from Google News RSS and writes news.json.
// No dependencies, no AI tokens — run by GitHub Actions on a schedule.
import { writeFileSync } from "node:fs";

const FEEDS = [
  { cat: "ai",   url: "https://news.google.com/rss/search?q=artificial+intelligence+model+when:5d&hl=en-US&gl=US&ceid=US:en" },
  { cat: "robo", url: "https://news.google.com/rss/search?q=humanoid+robot+robotics+when:5d&hl=en-US&gl=US&ceid=US:en" }
];

function decode(s) {
  return (s || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .trim();
}
function tag(block, name) {
  const m = block.match(new RegExp("<" + name + "[^>]*>([\\s\\S]*?)</" + name + ">"));
  return m ? decode(m[1]) : "";
}

async function pull(feed) {
  const res = await fetch(feed.url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(feed.url + " -> HTTP " + res.status);
  const xml = await res.text();
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 7).map(m => {
    const b = m[1];
    const title = tag(b, "title");
    return {
      cat: feed.cat,
      title,
      blurb: tag(b, "description").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 150) + "…",
      src: tag(b, "source") || title.split(" - ").pop() || "News",
      url: tag(b, "link")
    };
  }).filter(x => x.title && x.url);
}

const [ai, robo] = await Promise.all(FEEDS.map(pull));
const mixed = [];
for (let i = 0; i < Math.max(ai.length, robo.length); i++) {
  if (ai[i]) mixed.push(ai[i]);
  if (robo[i]) mixed.push(robo[i]);
}
if (mixed.length < 6) {
  console.error("Too few items fetched (" + mixed.length + "), keeping previous news.json");
  process.exit(1);
}
writeFileSync("news.json", JSON.stringify({ updated: new Date().toISOString(), items: mixed.slice(0, 12) }, null, 1));
console.log("Wrote news.json with " + Math.min(mixed.length, 12) + " items");
