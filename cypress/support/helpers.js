export function parsePrice(priceText) {
  return Number(priceText.replace('Rs. ', '').trim())
}
