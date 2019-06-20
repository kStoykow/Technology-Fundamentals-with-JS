function pyramid(base, increment) {
    let stoneRequest = 0;
    let marbleRequest = 0;
    let lapisLazuliRequest = 0;
    let goldRequest = 0;
    let finalHeight = 0;
    let startFrom = Number(base);
    let counter = 0;

    for (let i = base; i > 0; i -= 2) {
        counter++;
        finalHeight += increment;
        let currStoneReq = 0;

        if (i > 2) {
            currStoneReq = (startFrom - 2) * (startFrom - 2);
            stoneRequest += currStoneReq;

            if (counter % 5 === 0) {
                let currLapisReq = (startFrom * startFrom) - currStoneReq;
                lapisLazuliRequest += currLapisReq;

            } else {
                let currMarbleReq = (startFrom * startFrom) - currStoneReq;
                marbleRequest += currMarbleReq;
            }

        } else {
            goldRequest = startFrom * startFrom;
        }

        startFrom -= 2;
    }
    
    stoneRequest *= increment;
    marbleRequest *= increment;
    lapisLazuliRequest *= increment;
    goldRequest *= increment;
    console.log(`Stone required: ${Math.ceil(stoneRequest)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequest)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequest)}`);
    console.log(`Gold required: ${Math.ceil(goldRequest)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);
}