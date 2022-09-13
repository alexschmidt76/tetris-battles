const GAME_CLOCK = 1000,
      ROWS = 20,
      COLS = 10,
      SQ = 40;

const COLORS = [
    "#525252",
    "#00ffff",
    "#0000ff",
    "#ffaa00",
    "#00ff00",
    "#ff0000",
    "#9900ff",
    "#ffff00"
];

const SHAPES = [
     // I
     [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    // L
    [
        [2, 2, 2],
        [2, 0, 0],
        [0, 0, 0]
    ],
    // J
    [
        [3, 3, 3],
        [0, 0, 3],
        [0, 0, 0]
    ],
    // S
    [
        [0, 4, 4],
        [4, 4, 0],
        [0, 0, 0]
    ],
    // Z
    [
        [5, 5, 0],
        [0, 5, 5],
        [0, 0, 0]
    ],
    // T
    [
        [6, 6, 6],
        [0, 6, 0],
        [0, 0, 0]
    ],
    // O
    [
        [7, 7],
        [7, 7]
    ]
];

// utility functions

function drawSquare(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, SQ, SQ);
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(x, y, SQ, SQ);
}