function tripPrice(distance, ppl, price) {
    return `Needed money for that trip is ${(distance / 100) * 7 + (ppl * 0.100) * price}lv.`;
}