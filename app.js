// TODO - Assign shape colors, research possible display/draw methods - Tetris games are a starting point for shapes and grid layout. 
const pieces = [
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
	],
    // L shape - color: 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
	],
    // 4-line shape - color:
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[1, 1, 1, 1],
	], 
    // 5-line shape - color:
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 1, 0, 0],
	],
    // long-s shape - color:
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 1, 0],
		[1, 1, 1, 0],
	],
    // u shape - color:
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[1, 1, 1, 0],
	],
    // 5-square shape - color:
	[
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
	],
    // cross shape - color:
	[
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 0, 0],
		[0, 1, 1, 0],
	],
    // w shape - color:
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[1, 1, 0, 0],
	],
    // 4-square shape - color: 
	[
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
	],
    // 5-L shape - color: 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
	],
    // 4-L shape - color:
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 0, 0],
	],
    // 3-L shape - color:
];
// These pieces will need the ability to rotate, detect collisions and grid boundaries. 
const grid = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
// The grid is a 5 x 12 grid. Outside border solid black, inside thin black, light grey background. 