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
      "image": "../../public/lixeira-marrom.png"
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
      "image": "../../public/lixeira-marrom.png"
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
      "image": "../../public/lixeira-marrom.png"
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
      "image": "../../public/lixeira-marrom.png"
    },
    {
      "id": 5,
      "question": "Qual dos elementos abaixo não é utilizado como fonte de energia?",
      "options": [
        { "id": 1, "text": "Água corrente" },
        { "id": 2, "text": "Petróleo" },
        { "id": 3, "text": "Barra de Ferro" },
        { "id": 4, "text": "Sol" }
      ],
      "correctOptionId": 3,
      "image": "../../public/lixeira-marrom.png"
    },
    {
      "id": 6,
      "question": "Qual estratégia é mais eficaz na conservação de espécies ameaçadas?",
      "options": [
        { "id": 1, "text": "Caçar" },
        { "id": 2, "text": "Poluir" },
        { "id": 3, "text": "Preservar" },
        { "id": 4, "text": "Ignorar" }
      ],
      "correctOptionId": 3,
      "image": "../../public/lixeira-marrom.png"
    },
  ]
];

export default questions;

export const getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions[0].length);
  return questions[0][randomIndex];
};


