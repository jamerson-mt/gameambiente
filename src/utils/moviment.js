import mapa, { atualizarPosicaoBoneco } from './mapa.js';

function colisao(newRow, newColumn) {
    if (newRow < 0 || newColumn < 0 || newRow >= 40 || newColumn >= 40) {
        alert('parede');
        return true;
    } else if (mapa.value[newRow][newColumn] >= 10 && mapa.value[newRow][newColumn] <= 19 ) {
        alert('bateu em algum obstaculo!');
        let item = {valor : mapa.value[newRow][newColumn], row: newRow, col: newColumn};
        return item;
    }
    return false;
}

// Função para mover o boneco para cima
export function moviment(event, position) {
    const directions = {
        'w': { row: -1, column: 0, log: 'cima' },
        's': { row: 1, column: 0, log: 'baixo' },
        'a': { row: 0, column: -1, log: 'esquerda' },
        'd': { row: 0, column: 1, log: 'direita' }
    };

    if (directions[event.key]) {
        const newRow = position.value.row + directions[event.key].row;
        const newColumn = position.value.col + directions[event.key].column;

        if (mapa.value[newRow] && mapa.value[newRow][newColumn] !== undefined) {
            let colisaoResult = colisao(newRow, newColumn);
            if (colisaoResult) {
                return colisaoResult;
            } else {
                atualizarPosicaoBoneco(position.value.row, position.value.col, newRow, newColumn);
                position.value.row = newRow;
                position.value.col = newColumn;
            }
        } else {
            colisao(newRow, newColumn);
        }
    }
}




