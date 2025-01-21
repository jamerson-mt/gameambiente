const itensBanco = [
  { id: 10, nome: 'cadeira', imagem: 'itens/cadeira.png', tipo: 'plastico', coletado: true },
  { id: 11, nome: 'garrafa de plastico', imagem: 'itens/garrafaplastica.png', tipo: 'plastico', coletado: true },
  { id: 12, nome: 'pilha', imagem: 'itens/pilha.png', tipo: 'eletronico', coletado: false },
  { id: 13, nome: 'metais', imagem: 'itens/metal.png', tipo: 'metal', coletado: false },
  { id: 14, nome: 'livro', imagem: 'itens/livro.png', tipo: 'papel', coletado: false },
  { id: 15, nome: 'maçã', imagem: 'itens/macã.png', tipo: 'organico', coletado: false },
  { id: 16, nome: 'casca de banana', imagem: 'itens/cascadebanana.png', tipo: 'organico', coletado: false },
  { id: 17, nome: 'sacola plastica', imagem: 'itens/sacola plastica.png', tipo: 'plastico', coletado: false },
  { id: 18, nome: 'dinheiro', imagem: 'itens/dinheiro.png', tipo: 'papel', coletado: false },
];

export function getItemImage(itemId) {
  const item = itensBanco.find(i => i.id === itemId);
  return item ? item.imagem : null;
}

export function coletarItem(itemId) {
  const item = itensBanco.find(i => i.id === itemId);
  if (item) {
    item.coletado = true;
    item.imagem = getItemImage(itemId);
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

export default itensBanco;
