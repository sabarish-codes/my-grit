function isValidSudoku(board: string[][]): boolean {
    
    const rows: Set<number>[] = [];
    const cols: Set<number>[] = [];
    const boxes: Set<number>[] = [];

    for(let i=0; i<9; i++){
        rows.push(new Set());
        cols.push(new Set());
        boxes.push(new Set());
    }

    const findBox = (row: number, col: number) => {
        return (Math.floor(row/3) * 3) + Math.floor(col/3);
    }

    //iterate the board
    for(let row=0; row<9; row++){
        for(let col=0; col<9; col++){
            const char = board[row][col];
            if(char === '.'){
                continue;
            }
            const num = Number(char);
            const boxNumber = findBox(row, col);
            
            const r = rows[row];
            const c = cols[col];
            const b = boxes[boxNumber];
            
            if(r.has(num) || c.has(num) || b.has(num)){
                return false;
            }

            r.add(num);
            c.add(num);
            b.add(num);
        }
    }
    return true;
};

/*
Time complexity - O(1)
Space complexity - O(1)
*/