const mappings = {
  gh: "https://github.com/",
  yt: "https://www.youtube.com/",
};

// import { Fzf } from "https://esm.sh/fzf";
//
// const list = [
//   { name: "GitHub", url: "https://github.com" },
//   { name: "Stack Overflow", url: "https://stackoverflow.com" },
//   { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
//   { name: "HackerRank", url: "https://www.hackerrank.com" },
//   { name: "LeetCode", url: "https://leetcode.com" },
//   { name: "W3Schools", url: "https://www.w3schools.com" },
//   { name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
//   { name: "DevDocs", url: "https://devdocs.io" },
//   { name: "CodePen", url: "https://codepen.io" },
//   { name: "GitLab", url: "https://gitlab.com" },
//   { name: "Bitbucket", url: "https://bitbucket.org" },
//   { name: "JSFiddle", url: "https://jsfiddle.net" },
//   {
//     name: "Visual Studio Code Marketplace",
//     url: "https://marketplace.visualstudio.com",
//   },
//   { name: "npm", url: "https://www.npmjs.com" },
//   { name: "Can I use", url: "https://caniuse.com" },
//   { name: "Codewars", url: "https://www.codewars.com" },
//   { name: "CSS-Tricks", url: "https://css-tricks.com" },
//   { name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
//   { name: "A List Apart", url: "https://alistapart.com" },
//   {
//     name: "Reddit (r/programming)",
//     url: "https://www.reddit.com/r/programming",
//   },
//   { name: "Google Developers", url: "https://developers.google.com" },
//   { name: "CodeSandbox", url: "https://codesandbox.io" },
//   { name: "DZone", url: "https://dzone.com" },
//   { name: "Codecademy", url: "https://www.codecademy.com" },
//   {
//     name: "DigitalOcean",
//     url: "https://www.digitalocean.com/community/tutorials",
//   },
//   { name: "Dev.to", url: "https://dev.to" },
//   { name: "Hashnode", url: "https://hashnode.com" },
//   { name: "Product Hunt", url: "https://www.producthunt.com" },
//   { name: "SitePoint", url: "https://www.sitepoint.com" },
//   { name: "Scotch.io", url: "https://scotch.io" },
// ];
//
// const linkContainer = document.getElementById("link-container");
// const input = document.getElementById("input");
//
// input.focus();
//
// const fzf = new Fzf(list, {
//   selector: (item) => item.name,
// });
//
// const highlightPositions = (string, positions) => {
//   let highlightedString = "";
//
//   for (let i = 0; i < string.length; i++) {
//     const possiblyhHighlightedPosition = positions.has(i)
//       ? `<mark>${string[i]}</mark>`
//       : string[i];
//
//     highlightedString = highlightedString.concat(possiblyhHighlightedPosition);
//   }
//
//   return highlightedString;
// };
//
// list.forEach((site) => {
//   const link = document.createElement("a");
//   linkContainer.appendChild(link);
//   link.textContent = site.name;
//   link.id = site.url;
//   link.href = site.url;
// });
//
// let query, websites;
//
// input.addEventListener("input", (e) => {
//   query = fzf.find(e.target.value);
//   websites = document.querySelectorAll("a");
//   websites.forEach((website) => {
//     const inQuery = query.find((q) => q.item.url === website.id);
//     if (inQuery) {
//       website.className = "";
//       const highlighted = highlightPositions(
//         inQuery.item.name,
//         inQuery.positions,
//       );
//       website.innerHTML = highlighted;
//     } else {
//       website.className = "hidden";
//     }
//     console.log(inQuery);
//     // website.style.order = inQuery.score;
//   });
// });

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
// const mostMatching = query.reduce(
//   (acc, item) => (item.score > acc.score ? item : acc),
//   {
//     score: 0,
//   },
// );
// document.getElementById(mostMatching.item.url).click();
//     open(`https://www.google.com/search?q=${e.target.value}`, "_self");
//   }
// });
