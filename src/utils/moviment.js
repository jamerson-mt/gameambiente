import mapa, { atualizarPosicaoBoneco } from './mapa.js';
import itensBanco from '../data/itensBanco';

let c = 1;
let oldDirecao = 'w';
function atualizarSprite(direcao) {

    const bonecoItem = itensBanco.find(item => item.id === 99);
    if (bonecoItem) {
        if (direcao == oldDirecao) {
            if (c < 4) {
                c++;
            } else {
                c --;
            }
        } else {
            c = 1;
            oldDirecao = direcao;
        }
        bonecoItem.imagem = `personagem/${direcao}${c}.svg`;
    }
}

function colisao(newRow, newColumn) {
    if (newRow < 0 || newColumn < 0 || newRow >= 40 || newColumn >= 40) {
        return true;
    } else if (mapa.value[newRow][newColumn] == 1) {
        return true;
    } else if (mapa.value[newRow][newColumn] >= 10 && mapa.value[newRow][newColumn] <= 19) {
        let item = { valor: mapa.value[newRow][newColumn], row: newRow, col: newColumn };
        return item;
    } else if (mapa.value[newRow][newColumn] >= 20 && mapa.value[newRow][newColumn] <= 24) {
        let item = { valor: mapa.value[newRow][newColumn], row: newRow, col: newColumn };
        return item;
    }
    return false;
}

// Função para mover o boneco para cima
export function moviment(event, position) {
    const directions = {
        'w': { row: -1, column: 0, log: 'cima', sprite: 'w' },
        's': { row: 1, column: 0, log: 'baixo', sprite: 's' },
        'a': { row: 0, column: -1, log: 'esquerda', sprite: 'a' },
        'd': { row: 0, column: 1, log: 'direita', sprite: 'd' }
    };


    if (directions[event.key]) {
        const newRow = position.value.row + directions[event.key].row;
        const newColumn = position.value.col + directions[event.key].column;

        if (mapa.value[newRow] && mapa.value[newRow][newColumn] !== undefined) {
            let colisaoResult = colisao(newRow, newColumn);
            if (colisaoResult) {
                return colisaoResult;
            } else {
                atualizarSprite(directions[event.key].sprite);
                atualizarPosicaoBoneco(position.value.row, position.value.col, newRow, newColumn);
                position.value.row = newRow;
                position.value.col = newColumn;
            }
        } else {
            colisao(newRow, newColumn);
        }
    }
}




