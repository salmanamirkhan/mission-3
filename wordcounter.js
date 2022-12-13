function toString(words) {
  return JSON.stringify(words);
}

function wordCounter(data) {
  let words = data.split(/\s/);

  let counter = 1;

  for (let i = 0; i < words.length; i++) {
    if (
      words[i].includes("crash" || "collide" || "scratch" || "bump" || "smash")
    ) {
      counter++;
    }
    if (counter == 5) {
      break;
    }
  }

  console.log(`your risk raiting is ${counter}`);
}
