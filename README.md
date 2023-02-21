# minion help pages

Dynamically retrieving help pages inside a CEP panel from a Github repo. Why update a website with help docs when the panel can update it's own help section in real-time without needing any updates or reinstallation?

## Usage

```bash
# npm run convert [name of folder]
npm run convert key-minion
```

```js
// Sometime before page render, like panel launch:
const user = "Inventsable";
const repo = "minion-pages";
const file = "key-minion.json";
let data = await fetch(
  `https://raw.githubusercontent.com/${user}/${repo}/master/results/${file}`
);

let pageJSON = JSON.parse(data.text());
console.log(pageJSON); // { pages: [ ... ], name: ... }
```

![](https://thumbs.gfycat.com/DirtyCreepyIndianrockpython-size_restricted.gif)
