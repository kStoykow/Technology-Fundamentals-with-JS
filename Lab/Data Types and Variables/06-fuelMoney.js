function tripPrice(distance, passengers, priceForLiter) {
    let busFuel = (distance / 100) * 7;
    busFuel += passengers * 0.100;
    let price = busFuel * priceForLiter;
    console.log(`Needed money for that trip is ${price}lv.`);
}