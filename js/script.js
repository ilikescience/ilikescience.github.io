const drawArt = canvas => {
  let dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // set up coords
  const width = canvas.width / dpr;
  const height = canvas.height / dpr;

  // poisson disc variables
  const r = 6;
  const k = 10;

  // grid settings
  // width of a column
  const w = r / Math.sqrt(2);
  // grid of points
  const grid = [];
  // active points
  const active = [];
  // number of columns
  const cols = Math.floor(width / w);
  // number of rows
  const rows = Math.floor(height / w);

  // init grid
  for (let i = 0; i < cols * rows; i++) {
    grid[i] = -1;
  }

  // pick a random point
  let x = Math.random() * width;
  let y = Math.random() * height;

  // locate that point in the grid
  let i = Math.floor(x / w);
  let j = Math.floor(y / w);

  // point age variable
  let pointAge = 0;

  // create a position vector for that point
  let pos = [x, y];

  // push that vector into the grid
  grid[i + j * cols] = pos;

  // activate that point
  active.push(pos);

  // continue running while we have active points
  while (active.length > 0) {
    let found = false;

    // pick a random active point
    const randIndex = Math.floor(Math.random() * active.length);
    // get that random point's position
    const activePos = active[randIndex];

    // try k times
    for (let n = 0; n <= k; n++) {
      // pick an angle
      const a = Math.random() * Math.PI * 2;
      // pick a magnitude
      const m = Math.random() * r + r;
      // create a new vector with that angle and magnitude
      const sample = [
        Math.cos(a) * m + activePos[0],
        Math.sin(a) * m + activePos[1],
        pointAge,
      ];

      // check which column and row that new vector is in
      const thisCol = Math.floor(sample[0] / w);
      const thisRow = Math.floor(sample[1] / w);

      // if the new vector is on the grid, and the grid doesn't already have a point defined ...
      if (
        thisCol > -1 &&
        thisRow > -1 &&
        thisCol < cols &&
        thisRow < rows &&
        grid[thisCol + thisRow * cols] === -1
      ) {
        // we're ok to put a new point on the grid!
        let ok = true;

        // look in the grid to the left, right, above and below
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            // get the grid coordinates of the neighbor we're on
            const index = thisCol + i + (thisRow + j) * cols;
            const neighbor = grid[index];

            // if the neighbor is on the grid ...
            if (neighbor) {
              // find the distance between the neighbor and the sample vector.
              const d = Math.sqrt(
                Math.pow(sample[0] - neighbor[0], 2) +
                  Math.pow(sample[1] - neighbor[1], 2),
              );

              // if the distance is smaller than the allowed minimum ...
              if (d < r) {
                // don't create a new point.
                ok = false;
              }
            }
          }
        }
        // if we've passed the minimum distance check,
        if (ok) {
          // cool!
          found = true;
          // add this point to the grid,
          grid[thisCol + thisRow * cols] = sample;
          // and add it as a point we can use to search.
          active.push(sample);
          pointAge++;
        }
      }
    }

    // if we failed to find a new point after k times,
    if (!found) {
      // take this point off the active list.
      active.splice(randIndex, 1);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    if (grid[i] != -1) {
      ctx.fillStyle = `hsl(${200 + grid[i][2] / 40 % 180}, 100%, 50%)`;
      ctx.beginPath();
      ctx.arc(grid[i][0], grid[i][1], 1, 0, 2 * Math.PI, true);
      ctx.fill();
    }
  }
};

window.addEventListener('load', function() {
  // set up canvas
  const canvas = document.querySelector('canvas');
  if (canvas) {
    drawArt(canvas);
  }
});
