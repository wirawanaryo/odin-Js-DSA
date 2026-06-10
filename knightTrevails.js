const rq = []
const cq = []
const max_row = 8;
const max_cell = 8;
const visited = [...Array(max_row)].map(() => Array(max_cell).fill(false));
const dr = [-2, -2, 2, 2, 1, -1, 1, -1]
const dc = [1, -1, 1, -1, -2, -2, 2, 2]
let parents = {};

function knightMoves([sr, sc], [er, ec]) {
  let r, c;
  let ended = false;
  

  rq.push(sr);
  cq.push(sc);
  visited[sr][sc] = true;
  let tilesLeft = 1;
  let tilesNext = 0;
  let move_count = 0;


  while (rq.length > 0) {
    r = rq.shift();
    c = cq.shift();
    if (r === er && c === ec) {
      ended = true;
      break;
    }
    tilesNext = explore(r, c, tilesNext);
    tilesLeft--;

    if (tilesLeft === 0) {
      tilesLeft = tilesNext;
      tilesNext = 0;
      move_count++;
    }
  }

  //reset
  rq.length = 0;
  cq.length = 0;
  visited.forEach(row => row.fill(false));

  if (ended) {
    return `You made it in ${move_count} moves!  Here's your path:\n ${printPath(er, ec)};`    
  }
  return -1;
}

function explore(r, c, tilesNext) {
  let rr, cc;
  for (let i = 0; i < dr.length; i++) {
    rr = r + dr[i];
    cc = c + dc[i];

    // out of bound
    if (rr < 0 || cc < 0) {
      continue;
    }
    if (rr >= max_row || cc >= max_cell) {
      continue;
    }

    //visited
    if (visited[rr][cc]) {
      continue;
    }

    parents[`${rr},${cc}`] = `${r},${c}`;
    rq.push(rr);
    cq.push(cc);
    visited[rr][cc] = true;
    tilesNext++;
  }
  return tilesNext;
}

function printPath(er, ec) {  
  let cur = `${er},${ec}`;
  let path = [];
  while (cur != undefined) {
    path.push(cur);
    cur = parents[cur]
  }
  path = path.toReversed()
  let path2text = ''
  path.forEach((node)=>{
    if (node === `${er},${ec}`) {
      path2text+= `${node}`
    } else {
      path2text+= `${node} => `
    }    
  })

  return path2text
}

console.log(knightMoves([3,3],[4,3]))
console.log(parents)