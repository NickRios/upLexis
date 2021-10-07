import CardsData from "@/shared/CardsData.json";

export default {
  getCards({ title, orderBy }) {
    if (!title) {
      return CardsData.sort((a, b) => a[orderBy] - b[orderBy]);
    }
    return CardsData.filter(card => card.title === title).sort((a, b) => a[orderBy] - b[orderBy]);
  },
  getCardById(id) {
    const [card] = CardsData.filter(card => card.id === parseInt(id));

    return card;
  }
};
