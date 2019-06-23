function extractSpice(startingYieldAmount) {
    let extractionDayCount = 0;
    let totalSpiceExtracted = 0;

    while (startingYieldAmount >= 100) {
        totalSpiceExtracted += startingYieldAmount;
        extractionDayCount++;

        if (totalSpiceExtracted >= 26) {
            totalSpiceExtracted -= 26;
        }

        startingYieldAmount -= 10;
    }

    if (totalSpiceExtracted >= 26) {
        totalSpiceExtracted -= 26;
    }

    console.log(extractionDayCount);
    console.log(totalSpiceExtracted);
}