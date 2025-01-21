const questions = [
    [
        {
          "id": 1,
          "question": "Qual prática contribui diretamente para a redução de resíduos plásticos nos oceanos?",
          "options": [
            { "id": 1, "text": "Reutilizar" },
            { "id": 2, "text": "Descartar" },
            { "id": 3, "text": "Produzir" },
            { "id": 4, "text": "Ignorar" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 2,
          "question": "Qual é a melhor forma de garantir o uso responsável da água potável?",
          "options": [
            { "id": 1, "text": "Economizar" },
            { "id": 2, "text": "Desperdiçar" },
            { "id": 3, "text": "Acumular" },
            { "id": 4, "text": "Poluir" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 3,
          "question": "Qual tecnologia é mais eficiente para gerar energia limpa e renovável?",
          "options": [
            { "id": 1, "text": "Solar" },
            { "id": 2, "text": "Carvão" },
            { "id": 3, "text": "Fóssil" },
            { "id": 4, "text": "Nuclear" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 4,
          "question": "Qual prática reduz o desperdício de alimentos em grande escala?",
          "options": [
            { "id": 1, "text": "Compostar" },
            { "id": 2, "text": "Descartar" },
            { "id": 3, "text": "Armazenar" },
            { "id": 4, "text": "Ignorar" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 5,
          "question": "Qual ação é essencial para a preservação de áreas florestais?",
          "options": [
            { "id": 1, "text": "Replantar" },
            { "id": 2, "text": "Desmatar" },
            { "id": 3, "text": "Queimar" },
            { "id": 4, "text": "Extrair" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 6,
          "question": "Como podemos reduzir a poluição do ar nas grandes cidades?",
          "options": [
            { "id": 1, "text": "Carona" },
            { "id": 2, "text": "Privados" },
            { "id": 3, "text": "Indústria" },
            { "id": 4, "text": "Carvão" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 7,
          "question": "O que pode ser feito para diminuir o consumo de energia elétrica em residências?",
          "options": [
            { "id": 1, "text": "Desligar" },
            { "id": 2, "text": "Aumentar" },
            { "id": 3, "text": "Ligar" },
            { "id": 4, "text": "Deixar" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 8,
          "question": "Qual estratégia é mais eficaz na conservação de espécies ameaçadas?",
          "options": [
            { "id": 1, "text": "Preservar" },
            { "id": 2, "text": "Caçar" },
            { "id": 3, "text": "Poluir" },
            { "id": 4, "text": "Ignorar" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 9,
          "question": "Como podemos minimizar o impacto ambiental do descarte de eletrônicos?",
          "options": [
            { "id": 1, "text": "Reciclar" },
            { "id": 2, "text": "Descartar" },
            { "id": 3, "text": "Ignorar" },
            { "id": 4, "text": "Queimar" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.png"
        },
        {
          "id": 10,
          "question": "Qual abordagem ajuda a evitar o esgotamento de recursos naturais?",
          "options": [
            { "id": 1, "text": "Poupar" },
            { "id": 2, "text": "Extrair" },
            { "id": 3, "text": "Desperdiçar" },
            { "id": 4, "text": "Consumir" }
          ],
          "correctOptionId": 1,
          "image": "../../public/organicolixeira-removebg-preview.pngg"
        }
      ]       
];

export default questions;

export const getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions[0].length);
  return questions[0][randomIndex];
};


