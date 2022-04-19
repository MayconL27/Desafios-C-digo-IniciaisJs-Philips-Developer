const numTotal = parseInt(gets());
const numFigCompradas = parseInt(gets());
const album = [];

for (let i = 0; i < numFigCompradas; i++) {
  let fig = parseInt(gets());
  
  if (album.indexOf(fig) === -1) {
    album.push(fig);
  }
}

console.log(numTotal - album.length);