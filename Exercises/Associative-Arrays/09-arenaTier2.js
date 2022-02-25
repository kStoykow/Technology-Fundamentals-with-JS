function solve(input) {
    let acc = {};
    input.pop();

    for (const gladiator of input) {
        if (gladiator.split(' ').includes('->')) {

            let [name, skill, value] = gladiator.split(' -> ');
            if (!acc.hasOwnProperty(name)) {
                acc[name] = {};

            } else {
                if (!acc[name].hasOwnProperty(skill)) {
                    acc[name][skill] = value;
                } else {
                    if (acc[name][skill] < value) {
                        acc[name][skill] = value;
                    }
                }
            }

            if (!acc[name].hasOwnProperty(skill)) {
                acc[name][skill] = value;
            }

        } else {
            let [firstHero, , secondHero] = gladiator.split(' ');
            if (acc.hasOwnProperty(firstHero) && acc.hasOwnProperty(secondHero)) {
                let firstHeroSkills = Object.entries(acc[firstHero]);
                let secondHeroSkills = Object.entries(acc[secondHero]);
                for (const skill of firstHeroSkills) {
                    for (const spell of secondHeroSkills) {
                        if (skill[0] == spell[0]) {
                            if (skill[1] > spell[1]) {
                                delete acc[secondHero];
                            } else {
                                delete acc[firstHero];
                            }
                        }
                    }
                }
            }
        }
    }

    Object.keys(acc).sort((a, b) => Object.values(acc[b]).map(Number).reduce((acc, e) => acc + e, 0) -
        Object.values(acc[a]).map(Number).reduce((acc, e) => acc + e, 0) || a.localeCompare(b))
        .forEach(hero => {
            let totalPoints = Object.values(acc[hero]).map(Number).reduce((acc, e) => acc + e, 0);
            console.log(`${hero}: ${totalPoints} skill`);

            Object
                .entries(acc[hero])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .map(([key, value]) => console.log(`- ${key} <!> ${value}`));
        });
}
solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])