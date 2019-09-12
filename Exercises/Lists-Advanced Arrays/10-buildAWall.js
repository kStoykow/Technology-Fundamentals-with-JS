function buildingWall(allGroups) {
    allGroups = allGroups.map(Number);
    let totalSum = 0;
    let dailyConcreteUse = [];
    let totalConcreteUse = 0;

    while (allGroups.some(e => e < 30)) {
        let dailyGroupUse = 0;
        for (let currentGroup = 0; currentGroup < allGroups.length; currentGroup++) {
            if (allGroups[currentGroup] != 30) {
                allGroups[currentGroup]++;
                dailyGroupUse += 195;
                totalConcreteUse += 195;
            }
        }

        dailyConcreteUse.push(dailyGroupUse);
    }

    totalSum = totalConcreteUse * 1900;
    console.log(dailyConcreteUse.join(', '));
    console.log(`${totalSum} pesos`);
}
buildingWall(['21', '25', '28'])