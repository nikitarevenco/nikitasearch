const instantMacros = {
  ".gh": "https://www.github.com/",
  ".yt": "https://www.youtube.com/",
};

const searchMacros = {
  yt: "https://www.youtube.com/results?search_query=",
  so: "https://www.google.com/search?q=site%3Astackoverflow.com+",
};

const input = document.getElementById("input");

input.focus();

// Instant Macro: type ".gh" and it instantly opens github.com
const checkInstantMacros = (e) => {
  const query = e.target.value;
  if (query in instantMacros) {
    open(instantMacros[query], "_self");
  }
};

// Search macro: type "?yt <query>" to search youtube
const checkSearchMacros = (e) => {
  const match = e.target.value.match(/\?(.*?)\s+(.*)/);
  if (match) {
    const [_, command, query] = match;

    if (command in searchMacros) {
      open(searchMacros[command].concat(encodeURIComponent(query)), "_self");
    }
  }
};

input.addEventListener("input", checkInstantMacros);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkSearchMacros(e);
    open(
      `https://www.google.com/search?q=${encodeURIComponent(e.target.value)}`,
      "_self",
    );
  }
});
