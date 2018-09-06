class Tile {
	constructor(){
		this.mine = false;
		this.flag = false;
		this.adjminenum = 0;
		this.cell = 0;
	}
}
class mineField {
    constructor(height, width, numBombs){
        this.height = height;
        this.width = width;
		this.bombs = numBombs;
		this.flags = numBombs;
        this.arr = [];
		let cells = height * width;
		//let x = new Tile();
        for(let i = 0; i < width; i++){
            this.arr.push([0]);
            for(let j = 0; j < height; j++){
                this.arr[i][j] = new Tile();
				if(Math.floor(Math.random() * 3) == 1){
					this.arr[i][j] = true;
					/*if(i > 0){
						this.arr[i-1][j].adjminenum++;
						if(j > 0){
							this.arr[i-1][j-1].adjminenum++;
						}
						if(j > dimension-1){
							this.arr[i-1][j+1].adjminenum++;
						}
					}
					if(j > 0){
						this.arr[i][j-1].adjminenum++;
					}
					if(j < dimension-1){
						this.arr[i][j+1].adjminenum++;
					}
					if(i < dimension-1){
						this.arr[i+1][j].adjminenum++;
						if(j > 0){
							this.arr[i+1][j-1].adjminenum++;
						}
						if(j > dimension-1){
							this.arr[i+1][j+1].adjminenum++;
						}
					}*/
				}
            }
        }
		/*this.arr[3][1].mine = true;
		this.arr[3][2].mine = true;
		this.arr[3][3].mine = true;
		this.arr[3][4].mine = true;
		this.arr[3][0].mine = true;*/
    }
	Click(cell,row,col,i,dimension){
		if(cell[row][col].field.arr[row][col].adjminenum == 0 && cell[row][col].field.arr[row][col].mine != true){
			cell[row][col].field.Expand(cell,row,col,dimension);
		}
        else if(cell[row][col].field.arr[row][col].mine == true){
        	cell[row][col].className = 'bomb';
		}
	}
	Flag(x,y) {
		this.arr[x][y].flag = true;
		flags --;
		if(flags == 0) {

		}
	}
	Expand(cell, row, col, dimension) {
		if(cell[row][col].className == 'clicked'){
			console.log("you did it");
			return;
		}
		if(this.arr[row][col].adjminenum == 0 && !(this.arr[row][col].mine)){
			cell[row][col].className = 'clicked';
			if(row > 0){
				this.Expand(cell,row-1,col,dimension);
				if(col > 0){
					this.Expand(cell,row-1,col-1,dimension);
				}
				if(col > dimension-1){
					this.Expand(cell,row-1,col+1,dimension);
				}
			}
			if(col > 0){
				this.Expand(cell,row,col-1,dimension);
			}
			if(col < dimension-1){
				this.Expand(cell,row,col+1,dimension);
			}
			if(row < dimension-1){
				this.Expand(cell,row + 1,col,dimension);
				if(col > 0){
					this.Expand(cell,row+1,col-1,dimension);
				}
				if(col > dimension-1){
					this.Expand(cell,row+1,col+1,dimension);
				}
			}
		}
	}
}