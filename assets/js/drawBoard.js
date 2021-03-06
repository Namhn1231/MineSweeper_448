let grid = null;

/**
 * Represents a board. Pre: Empty body of HTML; Post: Playing field is generated in the body
 * @constructor
 * @param {int} height - The height of the grid.
 * @param {int} width - The width of the grid.
 * @param {int} bombsLeft - The amount of bombs to be placed in the grid.
 * @returns - nothing
 */
function drawBoard(height, width, bombsLeft){
	let cell = [];
	let field = new mineField(height, width, bombsLeft);

    grid = document.createElement('table');
    grid.className = 'grid';

    for (let r=0; r<height; r++){
    	let tr = grid.appendChild(document.createElement('tr')); //creates a new row for each r value
 		cell.push([0]);
        for (let c=0; c<width; c++){
         	cell[r][c] = tr.appendChild(document.createElement('td')); //creates a new table data cell in the current row for each column
            cell[r][c].onclick = function(){
				field.Click(cell,r,c);
			};
			cell[r][c].oncontextmenu = function(){
				document.getElementById("flagsOutput").innerHTML = field.Flag(cell,r,c);
				document.getElementById("flagsOutput").style.color="white";
				return false;
			};
     	}
    }
	document.body.appendChild(grid);
}
/**
 * Removes the old table from the page. Pre: Grid is already generated; Post: All elements of the grid are delered
 * @function
 * @returns - nothing
 */
function deleteBoard(){
	if(grid != null){
 		document.body.removeChild(grid);
 	}
}
