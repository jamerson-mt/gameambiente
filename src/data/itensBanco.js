import mapa from "@/utils/mapa";

export const itensBanco = [
  { id: 10, nome: 'cadeira', imagem: 'itens/cadeira.png', tipo: 'plastico', coletado: true },
  { id: 11, nome: 'garrafa de plastico', imagem: 'itens/garrafaplastica.png', tipo: 'plastico', coletado: false },
  { id: 12, nome: 'pilha', imagem: 'itens/pilha.png', tipo: 'eletronico', coletado: false },
  { id: 13, nome: 'metais', imagem: 'itens/metal.png', tipo: 'metal', coletado: false },
  { id: 14, nome: 'livro', imagem: 'itens/livro.png', tipo: 'papel', coletado: false },
  { id: 15, nome: 'maçã', imagem: 'itens/macã.png', tipo: 'organico', coletado: false },
  { id: 16, nome: 'casca de banana', imagem: 'itens/cascadebanana.png', tipo: 'organico', coletado: false },
  { id: 17, nome: 'sacola plastica', imagem: 'itens/sacolaplastica.png', tipo: 'plastico', coletado: false },
  { id: 18, nome: 'dinheiro', imagem: 'itens/dinheiro.png', tipo: 'papel', coletado: false },

  { id: 20, nome: 'lixeira organica', imagem: 'tiles/lixeiradeorganico.svg', tipo: 'organico', coletado: false, itensGuardados: [] },
  { id: 21, nome: 'lixeira de plastico', imagem: 'tiles/lixeiradeplastico.svg', tipo: 'plastico', coletado: false, itensGuardados: [] },
  { id: 22, nome: 'lixeira de papel', imagem: 'tiles/lixeiradepapel.svg', tipo: 'papel', coletado: false, itensGuardados: [] },
  { id: 23, nome: 'lixeira de vidro', imagem: 'tiles/lixeiradevidro.svg', tipo: 'vidro', coletado: false, itensGuardados: [] },
  { id: 99, nome: 'boneco', imagem: 'public/personagem/w1.svg', tipo: 'personagem', coletado: false },
];

export function getItemImage(itemId) {
  const item = itensBanco.find(i => i.id === itemId);
  return item ? item.imagem : null;
}

export function coletarItem(item2) {
  console.log(item2);
  const item = itensBanco.find(i => i.id === item2.valor);
  if (item) {
    item.coletado = true;
    item.imagem = getItemImage(item2.valor);
    mapa.value[item2.row][item2.col] = 0;
  }
}

export function selectOption(itemId) {
  const item = itensBanco.find(i => i.id === itemId);
  if (item) {
    item.coletado = !item.coletado;
  }
}

export function atualizarInventario() {
  return itensBanco.filter(item => item.coletado);
}

export function guardarItemNaLixeira(lixeiraId, itemId) {
  const lixeira = itensBanco.find(i => i.id === lixeiraId);
  if (lixeira && lixeira.itensGuardados) {
    if (!lixeira.itensGuardados.includes(itemId)) {
      lixeira.itensGuardados.push(itemId);
    }
  }
  console.log(itensBanco);
}

export default itensBanco;
