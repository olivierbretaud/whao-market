export const totalPrice = (card) => {
    let totalPrice = 0;
     card.map(article => {
        return totalPrice += article.price
    })
  return totalPrice.toFixed(2);
}