class TicTacToe {
    constructor() {
        this.matrix = [];
      for (let i = 0; i < 3; i++){
        this.matrix.push([]);
          for (let j = 0; j < 3; j++){
            this.matrix[i][j] = '0';
          }
      }
      this.firstPlayer = true;

    }

    getCurrentPlayerSymbol() {
        if (this.firstPlayer){
            return 'x';
        } else {
            return 'o';
        }        
    }

    nextTurn(rowIndex, columnIndex) {
        let i = rowIndex;
        let j = columnIndex;
        if (this.matrix[i][j] !== '0'){
            return;
        }
        if (this.getCurrentPlayerSymbol() == 'x'){
            this.matrix[i][j] = 'x';
        } else {
            this.matrix[i][j] = 'o';
        }
        this.firstPlayer = !this.firstPlayer;
    }

    isFinished() {

       if (this.getWinner() != null || this.isDraw() == true){
           return true;
       } else {
           return false;
       }
    }

    getWinner() {
        if (this.matrix[0][0] == 'x' && this.matrix[0][1] == 'x' && this.matrix[0][2] == 'x'){
            return 'x';
        } 
        else if (this.matrix[0][0] === 'o' && this.matrix[0][1] === 'o' && this.matrix[0][2] === 'o'){
            return 'o';
        }
        else if (this.matrix[1][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[1][2] === 'x'){
            return 'x';
        }
        else if (this.matrix[1][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[1][2] === 'o'){
            return 'o';
        }
        else if (this.matrix[2][0] === 'x' && this.matrix[2][1] === 'x' && this.matrix[2][2] === 'x'){
            return 'x';
        }
        else if (this.matrix[2][0] === 'o' && this.matrix[2][1] === 'o' && this.matrix[2][2] === 'o'){
            return 'o';
        }
        else if (this.matrix[0][0] === 'x' && this.matrix[1][0] === 'x' && this.matrix[2][0] === 'x'){
            return 'x';
        }
        else if (this.matrix[0][0] === 'o' && this.matrix[1][0] === 'o' && this.matrix[2][0] === 'o'){
            return 'o';
        }
        else if (this.matrix[0][1] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][1] === 'x'){
            return 'x';
        }
        else if (this.matrix[0][1] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][1] === 'o'){
            return 'o';
        }
        else if (this.matrix[0][2] === 'o' && this.matrix[1][2] === 'o' && this.matrix[2][2] === 'o'){
            return 'o';
        }
        else if (this.matrix[0][2] === 'x' && this.matrix[1][2] === 'x' && this.matrix[2][2] === 'x'){
            return 'x';
        }
        else if (this.matrix[0][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][2] === 'x'){
            return 'x';
        }
        else if (this.matrix[0][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][2] === 'o'){
            return 'o';
        }
        else if (this.matrix[0][2] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][0] === 'x'){
            return 'x';
        }
        else if (this.matrix[0][2] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][0] === 'o'){
            return 'o';
        }
        else {
            return null;
        }
        
    }

    noMoreTurns() {
        for (let i = 0; i < this.matrix.length; i++){
            for (let j = 0; j < this.matrix[i].length; j++){
                if (this.matrix[i][j] == 0){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() == null && this.noMoreTurns() == true){
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        let i = rowIndex;
        let j = colIndex;
        if (this.matrix[i][j] === '0'){
            return null;
        } else {
          return this.matrix[i][j];
        }
    }
}

module.exports = TicTacToe;
