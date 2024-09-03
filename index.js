const instantMacros = {
  ".y": "https://www.github.com/",
  ".g": "https://www.youtube.com/",
  ".p": "https://www.pass.proton.me",
  ".m": "https://www.mail.proton.me",
  ".d": "https://www.drive.proton.me",
};

const searchMacros = {
  y: "https://www.youtube.com/results?search_query=",
  o: "https://www.google.com/search?q=site%3Astackoverflow.com+",
  r: "https://www.google.com/search?q=site%3Astackoverflow.com+",
};

const input = document.getElementById("input");

input.focus();

const clearInput = () => {
  input.textContent = "";
};

const checkInstantMacros = (e) => {
  const query = e.target.value;
  if (query in instantMacros) {
    open(instantMacros[query], "_self");
  }
};

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
